'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Barlow_Condensed, Barlow } from 'next/font/google';

import NavItem from '../NavItem/NavItem';
import LineComp from '../LineComp/LineComp';

import { Planet } from '@/types/Planet';
import { NavItemProps } from '@/types/NavItemProps';
import { NavItemType } from '@/types/enums/NavItemType';

import { getPlanet } from '@/utils/getPlanet';
import { navLinkStyles } from '@/utils/styles/navLinkStyles';

import styles from './styles.module.scss';

const barlow = Barlow({
  subsets: ['latin'],
  weight: '400'
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: '400'
});

interface Props {
  planets: Planet[];
}

const ColoredNavItem = ({ children, href }: NavItemProps) => {
  return (
    <NavItem
      type={NavItemType.BUTTON}
      href={href}
      stylesProps={{
        ...navLinkStyles,
        color: '#d0d6f9',
        height: '32px',
        lineHeight: ''
      }}
    >
      {children}
    </NavItem>
  );
};

const PlanetInfo = ({ planets }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    return params.toString();
  };

  const pickedPlanet =
    searchParams.get('planet') === null ? 'moon' : searchParams.get('planet');

  const planet = getPlanet(pickedPlanet!, planets);

  return (
    <div className={styles.planetContainer}>
      <Image
        src={`${planet?.images.png}`}
        width={480}
        height={480}
        style={{ justifySelf: 'center' }}
        alt="destination-planet-img"
      />

      <section className={styles.planetInfoContainer}>
        <nav>
          <ul className={`${styles.navList} ${barlowCondensed.className}`}>
            <ColoredNavItem
              href={pathname + '?' + createQueryString('planet', 'moon')}
            >
              Moon
            </ColoredNavItem>

            <ColoredNavItem
              href={pathname + '?' + createQueryString('planet', 'mars')}
            >
              Mars
            </ColoredNavItem>

            <ColoredNavItem
              href={pathname + '?' + createQueryString('planet', 'europa')}
            >
              Europa
            </ColoredNavItem>

            <ColoredNavItem
              href={pathname + '?' + createQueryString('planet', 'titan')}
            >
              Titan
            </ColoredNavItem>
          </ul>
        </nav>

        <div className={styles.planetText}>
          <h1 className={styles.planetTextName}>{planet?.name}</h1>

          <p className={`${barlow.className} ${styles.planetTextDescription}`}>
            {planet?.description}
          </p>
        </div>

        <LineComp height="1px" width="100%" isHeaderLine={false} />

        <div className={styles.planetNumbers}>
          <div className={styles.planetNumbersContainer}>
            <h3
              className={`${barlowCondensed.className} ${styles.planetNumbersTitle}`}
            >
              Avg. distance
            </h3>
            <p className={styles.planetNumbersInfo}>{planet?.distance}</p>
          </div>

          <div className={styles.planetNumbersContainer}>
            <h3
              className={`${barlowCondensed.className} ${styles.planetNumbersTitle}`}
            >
              Est. travel time
            </h3>
            <p className={styles.planetNumbersInfo}>{planet?.travel}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanetInfo;
