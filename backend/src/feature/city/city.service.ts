import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { City } from './city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  getAll(): Promise<City[]> {
    return this.cityRepository.find();
  }

  async getById(id: number): Promise<City> {
    const city = await this.cityRepository.findOne(id);

    if (!city) throw new NotFoundException();

    return city;
  }
}
