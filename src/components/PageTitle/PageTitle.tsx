'use client';

import { usePathname } from 'next/navigation';
import { Barlow_Condensed } from 'next/font/google';

import { Paths } from '@/types/enums/Paths';

import styles from './styles.module.scss';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: '400'
});

const PageTitle = () => {
  const path = usePathname();
  let title: string[] = [];

  switch (path) {
    case Paths.DESTINATION:
      title = ['01', 'Pick your destination'];
      break;

    case Paths.CREW:
      title = ['02', 'Meet your crew'];
      break;

    case Paths.TECHNOLOGY:
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
