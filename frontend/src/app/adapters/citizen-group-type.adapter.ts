import { Injectable } from '@angular/core';

import { CitizenGroupType } from '../enums/citizen-group-type.enum';
import { CitizenNodeType } from '../enums/citizen-node-type.enum';

@Injectable()
export class CitizenGroupTypeAdapter {
  adapt(groupType: CitizenGroupType): CitizenNodeType {
    switch (groupType) {
      case CitizenGroupType.District:
        return CitizenNodeType.District;
      case CitizenGroupType.City:
        return CitizenNodeType.City;
      case CitizenGroupType.Street:
        return CitizenNodeType.Street;
      default:
        return CitizenNodeType.Citizen;
    }
  }
}
