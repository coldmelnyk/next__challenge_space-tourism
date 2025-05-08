'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Barlow } from 'next/font/google';

import { changeToNextElement } from '@/utils';

import { PersonOfCrew } from '@/types';

import styles from './styles.module.scss';

const barlow = Barlow({
  subsets: ['latin'],
  weight: '400'
});

interface Props {
  crew: PersonOfCrew[];
}

const CrewInfo = ({ crew }: Props) => {
  const [currentPerson, setCurrentPerson] = useState(crew[0]);

  const getActiveButtonStyles = (index: number) => {
    return crew[index] === currentPerson
      ? `${styles.crewButton} ${styles.activeButton}`
      : `${styles.crewButton}`;
  };

  const getArrayOfIndexes = () => crew.map((person, i) => i);

  const changer = changeToNextElement(crew, setCurrentPerson, currentPerson);

  const arrayOfIndexes = getArrayOfIndexes();

  useEffect(() => {
    const intervalChanger = setInterval(changer, 5 * 1000);

    return () => {
      clearInterval(intervalChanger);
    };
  }, [currentPerson]);

  return (
    <div className={styles.crewContainer}>
      <section className={styles.crewSectionInfo}>
        <div></div>

        <article className={styles.crewSectionInfoText}>
          <div className={styles.crewSectionInfoTextTitles}>
            <h2 className={styles.crewTitlesRole}>{currentPerson.role}</h2>
            <h3 className={styles.crewTitlesName}>{currentPerson.name}</h3>
          </div>

          <p className={`${barlow.className} ${styles.crewBio}`}>
            {currentPerson.bio}
          </p>
        </article>

        <nav className={styles.crewSectionInfoNav}>
          <ul className={styles.crewSectionInfoNavList}>
            {arrayOfIndexes.map(index => (
              <li key={index}>
                <button
                  className={getActiveButtonStyles(index)}
                  onClick={() => setCurrentPerson(crew[index])}
                ></button>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section className={styles.crewSectionPicture}>
        <Image
          src={`${currentPerson.images.png}`}
          alt="crew-person-image"
          fill
          objectFit='contain'
        />
      </section>
    </div>
  );
};

export default CrewInfo;
