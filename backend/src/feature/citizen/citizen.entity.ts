import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

import { City } from '../city/city.entity';
import { Group } from '../group/group.entity';

@Entity('citizens')
export class Citizen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Expose({ name: 'city_id' })
  @Column({ name: 'city_id' })
  cityId: number;

  @ManyToOne(() => City, (city) => city.citizens)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @Exclude()
  @Column({ name: 'group_id' })
  groupId: number;

  @ManyToOne(() => Group, (group) => group.citizens)
  @JoinColumn({ name: 'group_id' })
  group: Group;

  groups?: Group[];
}
