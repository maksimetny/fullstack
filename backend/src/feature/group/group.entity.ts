import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

import { Citizen } from '../citizen/citizen.entity';

import { GroupType } from './enums/group-type.enum';

@Exclude()
@Entity('groups')
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Expose()
  @Column()
  name: string;

  @Expose()
  @Column({
    enum: GroupType,
  })
  type: GroupType;

  @OneToMany(() => Citizen, (citizen) => citizen.group)
  citizens: Citizen[];

  @Column({ name: 'parent_id', nullable: true })
  parentId: number;

  @ManyToOne(() => Group, (group) => group.children)
  @JoinColumn({ name: 'parent_id' })
  parent: Group;

  @OneToMany(() => Group, (group) => group.parent)
  children: Group[];
}
