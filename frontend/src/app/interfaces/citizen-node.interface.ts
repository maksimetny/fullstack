import { CitizenNodeType } from '../enums/citizen-node-type.enum';

export interface CitizenNode {
  name: string;
  type: CitizenNodeType;
  cityId?: number;
  children?: CitizenNode[];
}
