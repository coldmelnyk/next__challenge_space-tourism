import type { Metadata } from 'next';
import Link from 'next/link';
import { Barlow, Bellefair } from 'next/font/google';

import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'Home | Space Tourism',
  description: "So, you want to travel to space - let's face it!"
};

const barlow = Barlow({
  subsets: ['latin'],
  weight: '400'
});

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400'
});

const HomePage = () => {
  return (
    <article className={styles.article}>
      <div className={styles.textContainer}>
        <p className={styles.text1}>SO, YOU WANT TO TRAVEL TO</p>

        <h1 className={styles.text2}>SPACE</h1>

        <p className={`${styles.text3} ${barlow.className}`}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className={styles.buttonContainer}>
        <Link className={styles.buttonLink} href={'/destination'}>
          <span className={`${styles.buttonText} ${bellefair.className}`}>
            Explore
          </span>
        </Link>
      </div>
    </article>
  );
};

export default HomePage;
