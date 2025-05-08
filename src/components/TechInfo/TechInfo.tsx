'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Bellefair, Barlow } from 'next/font/google';

import { changeToNextElement } from '@/utils';

import { Tech } from '@/types';

import styles from './styles.module.scss';

interface Props {
  technologies: Tech[];
}

const barlow = Barlow({
  subsets: ['latin'],
  weight: '400'
});

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400'
});

const TechInfo = ({ technologies }: Props) => {
  const [currentTech, setCurrentTech] = useState(technologies[0]);

  const getActiveButtonStyles = (index: number) => {
    return technologies[index] === currentTech
      ? `${styles.techButton} ${styles.activeButton} ${bellefair.className}`
      : `${styles.techButton} ${bellefair.className}`;
  };

  const getArrayOfIndexes = useCallback(
    () => technologies.map((tech, i) => i),
    [technologies]
  );

  const changer = changeToNextElement(
    technologies,
    setCurrentTech,
    currentTech
  );

  const arrayOfIndexes = useMemo(
    () => getArrayOfIndexes(),
    [getArrayOfIndexes]
  );

  useEffect(() => {
    const intervalChanger = setInterval(changer, 5 * 1000);

    return () => {
      clearInterval(intervalChanger);
    };
  }, [currentTech]);

  return (
    <div className={`${styles.techContainer} ${bellefair.className}`}>
      <section className={styles.techTextSection}>
        <nav className={styles.techTextSectionNav}>
          <ul className={styles.techTextSectionNavList}>
            {arrayOfIndexes.map(index => (
              <li key={index}>
                <button
                  className={getActiveButtonStyles(index)}
                  onClick={() => setCurrentTech(technologies[index])}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <section className={styles.techTextSectionInfo}>
          <div className={styles.techTextSectionInfoContainer}>
            <h2 className={styles.techTextSectionInfoContainerTitle}>
              THE TERMINOLOGY…
            </h2>

            <h3 className={styles.techTextSectionInfoContainerName}>
              {currentTech.name}
            </h3>
          </div>

          <p
            className={`${styles.techTextSectionInfoDescription} ${barlow.className}`}
          >
            {currentTech.description}
          </p>
        </section>
      </section>

      <section className={styles.techImageSection}>
        <Image
          src={currentTech.images.landscape}
          alt="tech-image"
          fill
          priority
          objectFit='contain'
        />
      </section>
    </div>
  );
};

export default TechInfo;
