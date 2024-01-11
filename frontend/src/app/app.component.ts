import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Subscription } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

import { CitizenNode } from './interfaces/citizen-node.interface';
import { FlatCitizenNode } from './interfaces/flat-citizen-node.interface';
import { City } from './interfaces/city.interface';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  treeControl: FlatTreeControl<FlatCitizenNode>;

  treeFlattener: MatTreeFlattener<CitizenNode, FlatCitizenNode>;

  dataSource: MatTreeFlatDataSource<CitizenNode, FlatCitizenNode>;

  treeDataSubscription?: Subscription;

  cities?: City[];

  constructor(private appService: AppService) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer.bind(this),
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );

    this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);

    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
  }

  ngOnInit(): void {
    this.treeDataSubscription = this.appService
      .getCitizenTreeData()
      .pipe(
        mergeMap((treeData) =>
          this.appService.getCities().pipe(
            map((cities) => {
              return { cities, treeData };
            })
          )
        )
      )
      .subscribe({
        next: ({ cities, treeData }) => {
          this.cities = cities;

          this.dataSource.data = treeData;
        },
        error: (err) => {
          console.error(err);

          alert(
            'При загрузке данных произошла ошибка.\n\nПерезагрузите страницу для повтора.'
          );
        },
      });
  }

  ngOnDestroy(): void {
    this.treeDataSubscription?.unsubscribe();
  }

  transformer(node: CitizenNode, level: number): FlatCitizenNode {
    return {
      name: node.name,
      type: node.type,
      tooltip: this.getTooltip(node),
      level,
      expandable: Boolean(node.children),
    };
  }

  getLevel(node: FlatCitizenNode): number {
    return node.level;
  }

  isExpandable(node: FlatCitizenNode): boolean {
    return node.expandable;
  }

  hasChild(index: number, node: FlatCitizenNode): boolean {
    return node.expandable;
  }

  getChildren(node: CitizenNode) {
    return node.children;
  }

  getTooltip(node: CitizenNode) {
    if (node.cityId) {
      const city = this.cities?.find(({ id: cityId }) => cityId == node.cityId);

      if (city) return `${city.name}, ${city.value} жителей`;
    }

    return;
  }
}
