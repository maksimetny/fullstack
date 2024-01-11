import { CitizenNodeType } from "../enums/citizen-node-type.enum";

export interface FlatCitizenNode {
  name: string;
  type: CitizenNodeType;
  tooltip?: string;
  level: number;
  expandable: boolean;
}
