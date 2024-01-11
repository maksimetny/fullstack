import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { City } from './city.entity';

import { CityService } from './city.service';

@Controller('cities')
export class CityController {
  constructor(private cityService: CityService) {}

  @Get()
  getAll(): Promise<City[]> {
    return this.cityService.getAll();
  }

  @Get(':id')
  getById(
    @Param('id', ParseIntPipe)
    id: number,
  ): Promise<City> {
    return this.cityService.getById(id);
  }
}
