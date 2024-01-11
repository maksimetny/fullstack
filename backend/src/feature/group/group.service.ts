import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Group } from './group.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  getById(id: number): Promise<Group> {
    return this.groupRepository.findOne(id);
  }

  async getHierarchy(id: number): Promise<Group[]> {
    const group = await this.getById(id);

    return group.parentId
      ? (await this.getHierarchy(group.parentId)).concat(group)
      : [group];
  }
}
