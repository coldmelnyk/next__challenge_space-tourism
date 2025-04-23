'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';

import NavItem from '../NavItem/NavItem';
import { Planet } from '@/types/Planet';
import { getPlanet } from '@/utils/getPlanet';

import styles from './styles.module.scss';
import { NavItemProps } from '@/types/NavItemProps';
import LineComp from '../LineComp/LineComp';

interface Props {
  planets: Planet[];
}

const ColoredNavItem = ({ children, href }: NavItemProps) => {
  return (
    <NavItem href={href} color="#d0d6f9">
      {children}
    </NavItem>
  );
};

const PlanetSection = ({ planets }: Props) => {
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
    <div className={styles.infoContainer}>
      <Image
        src={`${planet?.images.png}`}
        width={480}
        height={480}
        alt="destination-planet-img"
      />

      <section>
        <nav>
          <ul className={styles.navList}>
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

        <h1>{planet?.name}</h1>

        <p>{planet?.description}</p>

        <LineComp height="1px" width="100%" isHeaderLine={false} />

        <div className={styles.numbersInfo}>
          <div>
            <p>Avg. distance</p>
            <p>{planet?.distance}</p>
          </div>

          <div>
            <p>Est. travel time</p>
            <p>{planet?.travel}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanetSection;
