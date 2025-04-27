'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { Paths } from '@/types/enums/Paths';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

const BackgroundLayout = ({ children }: Props) => {
  const path = usePathname();
  let classList = `${styles.body}`;

  let nameOfPath = path.split('/')[1];

  const doesPathExists = Object.values(Paths).find(path => {
    const clearedPath = path.split('/')[1];

    return clearedPath === nameOfPath;
  });

  if (nameOfPath === '') {
    nameOfPath = 'home';
    classList += ` ${styles.flexBetween}`;
  }

  if (!doesPathExists) {
    nameOfPath = 'home';
  }

  if (nameOfPath)
    return (
      <body className={classList}>
        <Image
          src={`/assets/${nameOfPath}/background-${nameOfPath}-desktop.jpg`}
          alt={`background-picture-${nameOfPath}`}
          fill
          style={{ zIndex: -1 }}
          priority
        />
        {children}
      </body>
    );
};

export default BackgroundLayout;
