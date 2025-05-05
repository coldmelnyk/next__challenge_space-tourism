import { Dispatch, SetStateAction } from 'react';

export const changeToNextElement = <T>(
  arrayOfElements: T[],
  stateChangeFunc: Dispatch<SetStateAction<T>>,
  currentElement: T
) => {
  const currentIndex = arrayOfElements.findIndex(person => person === currentElement);
  const indexes: number[] = [];

  for (let i = currentIndex; i < arrayOfElements.length; i++) {
    indexes.push(i);
  }

  for (let i = 0; i < currentIndex; i++) {
    indexes.push(i);
  }

  return () => {
    stateChangeFunc(arrayOfElements[indexes[1]]);
    const cutFirstIndex = indexes.shift();

    indexes.push(cutFirstIndex!);
  };
};
