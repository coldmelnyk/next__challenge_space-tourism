import type { Metadata } from 'next';

import CrewInfo from '@/components/CrewInfo/CrewInfo';

import { fetchingData } from '@/utils/getData';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Crew | Space Tourism',
  description: 'Discover our special-space team!'
};

const Crew = async () => {
  const data = await fetchingData();

  return <CrewInfo crew={data.crew} />;
};

const CrewPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Crew />
    </Suspense>
  );
};

export default CrewPage;
