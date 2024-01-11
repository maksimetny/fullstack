import { Injectable } from '@angular/core';

import { Citizen } from '../interfaces/citizen.interface';
import { CitizenNode } from '../interfaces/citizen-node.interface';
import { CitizenGroup } from '../interfaces/citizen-group.interface';
import { CitizenNodeType } from '../enums/citizen-node-type.enum';

import { CitizenGroupTypeAdapter } from './citizen-group-type.adapter';

@Injectable()
export class CitizenListAdapter {
  constructor(private citizenGroupTypeAdapter: CitizenGroupTypeAdapter) {}

  adapt(citizens: Citizen[]): CitizenNode[] {
    const treeData: CitizenNode[] = [];

    for (const citizen of citizens) {
      const [parentGroup] = citizen.groups;

      const parentNode = this.getFirstNode(treeData, parentGroup);

      const childGroups = citizen.groups.slice(1);

      const groupNode = this.getLastChildNode(parentNode, childGroups);

      const { city_id: cityId } = citizen;

      const citizenNode: CitizenNode = {
        name: citizen.name,
        type: CitizenNodeType.Citizen,
        cityId,
      };

      groupNode.children
        ? groupNode.children.push(citizenNode)
        : (groupNode.children = [citizenNode]);
    }

    return treeData;
  }

  private getLastChildNode(
    node: CitizenNode,
    groups: CitizenGroup[]
  ): CitizenNode {
    let lastNode = node;

    for (const group of groups) {
      if (!lastNode.children) lastNode.children = [];

      lastNode = this.getFirstNode(lastNode.children, group);
    }

    return lastNode;
  }

  private getFirstNode(
    treeData: CitizenNode[],
    group: CitizenGroup
  ): CitizenNode {
    let firstNode = treeData.find((node) => node.name == group.name);

    if (firstNode) return firstNode;

    firstNode = {
      name: group.name,
      type: this.citizenGroupTypeAdapter.adapt(group.type),
    };

    treeData.push(firstNode);

    return firstNode;
  }
}
