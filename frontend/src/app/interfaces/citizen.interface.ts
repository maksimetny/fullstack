import { CitizenGroup } from "./citizen-group.interface";

export interface Citizen {
  id: number;
  name: string;
  city_id: number;
  groups: CitizenGroup[];
}
