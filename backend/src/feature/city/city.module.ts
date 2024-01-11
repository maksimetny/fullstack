import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { City } from './city.entity';

import { CityService } from './city.service';

import { CityController } from './city.controller';

@Module({
  controllers: [CityController],
  providers: [CityService],
  imports: [TypeOrmModule.forFeature([City])],
  exports: [],
})
export class CityModule {}
