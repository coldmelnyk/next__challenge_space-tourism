import { Data } from '@/types';

export const fetchingData = async () => {
  const data: Data = await fetch('http://localhost:8080/data')
    .then(res => res.json())
    .catch(err => console.log(err));

  return data;
};
