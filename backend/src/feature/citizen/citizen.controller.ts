import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { Citizen } from './citizen.entity';

import { CitizenService } from './citizen.service';

@Controller('citizens')
export class CitizenController {
  constructor(private citizenService: CitizenService) {}

  @Get()
  getAll(): Promise<Citizen[]> {
    return this.citizenService.getAll();
  }

  @Get(':id')
  getById(
    @Param('id', ParseIntPipe)
    id: number,
  ): Promise<Citizen> {
    return this.citizenService.getById(id);
  }
}
