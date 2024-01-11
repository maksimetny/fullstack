import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CitizenListAdapter } from './adapters/citizen-list.adapter';

import { Citizen } from './interfaces/citizen.interface';
import { CitizenNode } from './interfaces/citizen-node.interface';
import { City } from './interfaces/city.interface';

import { environment } from '../environments/environment';

@Injectable()
export class AppService {
  constructor(
    private httpClient: HttpClient,
    private citizenListAdapter: CitizenListAdapter
  ) {}

  getCitizenTreeData(): Observable<CitizenNode[]> {
    return this.getCitizens().pipe(
      map((citizens) => {
        return this.citizenListAdapter.adapt(citizens);
      })
    );
  }

  getCitizens(): Observable<Citizen[]> {
    return this.httpClient.get<Citizen[]>(environment.baseApiUrl + '/citizens');
  }

  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(environment.baseApiUrl + '/cities');
  }
}
