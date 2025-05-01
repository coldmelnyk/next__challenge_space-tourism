import { Dispatch, SetStateAction } from 'react';

import { PersonOfCrew } from '@/types';

export const changeToNextPerson = (
  persons: PersonOfCrew[],
  stateChangeFunc: Dispatch<SetStateAction<PersonOfCrew>>,
  currentPerson: PersonOfCrew
) => {
  const currentIndex = persons.findIndex(person => person === currentPerson);
  const indexes: number[] = [];

  for (let i = currentIndex; i < persons.length; i++) {
    indexes.push(i);
  }

  for (let i = 0; i < currentIndex; i++) {
    indexes.push(i);
  }

  return () => {
    stateChangeFunc(persons[indexes[1]]);
    const cutFirstIndex = indexes.shift();

    indexes.push(cutFirstIndex!);
  };
};
