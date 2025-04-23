'use client';

import { usePathname } from 'next/navigation';
import { Barlow_Condensed } from 'next/font/google';

import styles from './styles.module.scss';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: '400'
});

const PageTitle = () => {
  const path = usePathname();
  let title: string[] = [];

  switch (path) {
    case '/destination':
      title = ['01', 'Pick your destination'];
      break;

    case '/crew':
      title = ['02', 'Meet your crew'];
      break;

    case '/technology':
      title = ['03', 'Space launch 101'];
      break;

    default:
      title = ['00', 'Home page'];
  }

  return (
    <h2 className={`${styles.title} ${barlowCondensed.className}`}>
      <span className={styles.titleNumber}>{title[0]}</span> {title[1]}
    </h2>
  );
};

export default PageTitle;
