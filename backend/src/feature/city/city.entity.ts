import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Citizen } from '../citizen/citizen.entity';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  value: number;

  @OneToMany(() => Citizen, (citizen) => citizen.city)
  citizens: Citizen[];
}
