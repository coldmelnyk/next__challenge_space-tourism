import type { Metadata } from 'next';
import { Barlow_Condensed } from 'next/font/google';
import { Suspense } from 'react';

import PlanetInfo from '@/components/PlanetInfo/PlanetInfo';

import { fetchingData } from '../../utils/getData';

import styles from './styles.module.scss';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: '400'
});

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
  console.log('render of dest page');

  return (
    <article className={styles.article}>
      <h2 className={`${styles.title} ${barlowCondensed.className}`}>
        <span className={styles.titleNumber}>01</span> Pick your destination
      </h2>

      <Suspense fallback={<p>Loading planet...</p>}>
        <Planets />
      </Suspense>
    </article>
  );
};

export default DestinationPage;
