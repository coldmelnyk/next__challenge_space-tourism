import type { Metadata } from 'next';
import { Suspense } from 'react';

import PlanetInfo from '@/components/PlanetInfo/PlanetInfo';

import { fetchingData } from '../../../utils/getData';

export const metadata: Metadata = {
  title: 'Destination | Space Tourism',
  description:
    "Choose you'r adventure discovering special details about planets you can visit"
};

const Planets = async () => {
  const data = await fetchingData();

  return <PlanetInfo planets={data.destinations} />;
};

const DestinationPage = () => {
  return (
    <Suspense fallback={<p>Loading planet...</p>}>
      <Planets />
    </Suspense>
  );
};

export default DestinationPage;
