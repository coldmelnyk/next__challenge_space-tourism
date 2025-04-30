import { PersonOfCrew, Planet, Tech } from '.';

export interface Data {
  destinations: Planet[];
  crew: PersonOfCrew[];
  technology: Tech[];
}
