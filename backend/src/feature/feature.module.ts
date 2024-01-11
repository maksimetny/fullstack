import { Module } from '@nestjs/common';

import { CitizenModule } from './citizen/citizen.module';
import { GroupModule } from './group/group.module';
import { CityModule } from './city/city.module';

@Module({
  imports: [CitizenModule, GroupModule, CityModule],
  exports: [],
})
export class FeatureModule {}
