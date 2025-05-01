import { Dispatch, SetStateAction } from 'react';

import { PersonOfCrew } from '@/types';

export const changeToNextPerson = (
  persons: PersonOfCrew[],
  stateChangeFunc: Dispatch<SetStateAction<PersonOfCrew>>
) => {
  const indexes: number[] = [];

  for (let i = 1; i < persons.length; i++) {
    indexes.push(i);
  }

  indexes.push(0);

  return () => {
    setInterval(() => {
      stateChangeFunc(persons[indexes[0]]);
      const cutFirstIndex = indexes.shift();

      indexes.push(cutFirstIndex!);
    }, 5 * 1000);
  };
};
