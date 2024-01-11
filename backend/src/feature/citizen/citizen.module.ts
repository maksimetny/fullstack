import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GroupModule } from '../group/group.module';

import { Citizen } from './citizen.entity';

import { CitizenService } from './citizen.service';

import { CitizenController } from './citizen.controller';

@Module({
  controllers: [CitizenController],
  providers: [CitizenService],
  imports: [TypeOrmModule.forFeature([Citizen]), GroupModule],
  exports: [],
})
export class CitizenModule {}
