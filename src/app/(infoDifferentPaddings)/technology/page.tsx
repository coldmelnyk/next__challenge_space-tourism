import type { Metadata } from 'next';
import { Suspense } from 'react';

import TechInfo from '@/components/TechInfo/TechInfo';

import { fetchingData } from '@/utils';

export const metadata: Metadata = {
  title: 'Technology | Space Tourism',
  description: 'The brand new technology we offer to travel by.'
};

const TechnologyList = async () => {
  const data = await fetchingData();

  return <TechInfo technologies={data.technology} />;
};

const TechnologyPage = () => {
  return (
    <>
      <Suspense fallback={<p>Loading technologies...</p>}>
        <TechnologyList />
      </Suspense>
    </>
  );
};

export default TechnologyPage;
