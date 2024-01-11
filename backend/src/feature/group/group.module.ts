import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Group } from './group.entity';

import { GroupService } from './group.service';

@Module({
  providers: [GroupService],
  imports: [TypeOrmModule.forFeature([Group])],
  exports: [GroupService],
})
export class GroupModule {}
