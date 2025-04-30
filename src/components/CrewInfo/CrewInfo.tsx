'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Barlow } from 'next/font/google';

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

  return (
    <div className={styles.crewContainer}>
      <section className={styles.crewSectionInfo}>
        <div>
          <div>
            <h2 className={styles.crewTitlesRole}>{currentPerson.role}</h2>
            <h3 className={styles.crewTitlesName}>{currentPerson.name}</h3>
          </div>

          <p className={`${barlow.className} ${styles.crewBio}`}>
            {currentPerson.bio}
          </p>
        </div>

        <nav>
          <ul>
            <li>
              <button
                className={getActiveButtonStyles(0)}
                onClick={() => setCurrentPerson(crew[0])}
              ></button>
            </li>

            <li>
              <button
                className={getActiveButtonStyles(1)}
                onClick={() => setCurrentPerson(crew[1])}
              ></button>
            </li>

            <li>
              <button
                className={getActiveButtonStyles(2)}
                onClick={() => setCurrentPerson(crew[2])}
              ></button>
            </li>

            <li>
              <button
                className={getActiveButtonStyles(3)}
                onClick={() => setCurrentPerson(crew[3])}
              ></button>
            </li>
          </ul>
        </nav>
      </section>

      <section className={styles.crewSectionPicture}>
        <Image
          src={`${currentPerson.images.png}`}
          width={539}
          height={734}
          alt="crew-person-image"
        />
      </section>
    </div>
  );
};

export default CrewInfo;
