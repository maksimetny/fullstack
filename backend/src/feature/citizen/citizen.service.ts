import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { GroupService } from '../group/group.service';

import { Citizen } from './citizen.entity';

@Injectable()
export class CitizenService {
  constructor(
    @InjectRepository(Citizen)
    private citizenRepository: Repository<Citizen>,
    private groupService: GroupService,
  ) {}

  async getAll(): Promise<Citizen[]> {
    const citizens = await this.citizenRepository.find();

    const citizenHandler = this.addGroupHierarchy.bind(this);

    return Promise.all(citizens.map(citizenHandler));
  }

  async getById(id: number): Promise<Citizen> {
    const citizen = await this.citizenRepository.findOne(id);

    if (!citizen) throw new NotFoundException();

    return this.addGroupHierarchy(citizen);
  }

  private async addGroupHierarchy(citizen: Citizen): Promise<Citizen> {
    citizen.groups = await this.groupService.getHierarchy(citizen.groupId);

    return citizen;
  }
}
