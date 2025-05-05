'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { changeToNextElement } from '@/utils';

import { Tech } from '@/types';

import styles from './styles.module.scss';

interface Props {
  technologies: Tech[];
}

const TechInfo = ({ technologies }: Props) => {
  const [currentTech, setCurrentTech] = useState(technologies[0]);

  const getActiveButtonStyles = (index: number) => {
    return technologies[index] === currentTech
      ? `${styles.techButton} ${styles.activeButton}`
      : `${styles.techButton}`;
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
    <div className={styles.techContainer}>
      <section className={styles.techTextSection}>
        <nav>
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

        <section>
          <h2>{currentTech.name}</h2>
          <p>{currentTech.description}</p>
        </section>
      </section>

      <section className={styles.techImageSection}>
        <Image src={currentTech.images.landscape} alt="tech-image" fill priority />
      </section>
    </div>
  );
};

export default TechInfo;
