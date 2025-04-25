import Image from 'next/image';
import Link from 'next/link';
import { Barlow_Condensed } from 'next/font/google';

import NavItem from '../NavItem/NavItem';
import LineComp from '../LineComp/LineComp';

import { navLinkStyles } from '@/utils/styles/navLinkStyles';

import { NavItemProps } from '@/types/NavItemProps';
import { Paths } from '@/types/enums/Paths';
import { NavItemType } from '@/types/enums/NavItemType';

import styles from './styles.module.scss';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: '400'
});

const ColoredNavItem = ({ children, href }: NavItemProps) => {
  return (
    <NavItem type={NavItemType.HEADER_LINK} href={href} stylesProps={navLinkStyles}>
      {children}
    </NavItem>
  );
};

const Header = () => {
  return (
    <header className={`${styles.header} ${barlowCondensed.className}`}>
      <Link href="/">
        <Image
          width={48}
          height={48}
          src={'/assets/shared/logo.svg'}
          alt="header-logo"
        />
      </Link>

      <nav className={styles.nav}>
        <LineComp isHeaderLine={true} />

        <ul className={styles.navList}>
          <ColoredNavItem href={Paths.HOME}>
            <span className={styles.bold}>00</span>
            Home
          </ColoredNavItem>

          <ColoredNavItem href={Paths.DESTINATION}>
            <span className={styles.bold}>01</span>
            Destination
          </ColoredNavItem>

          <ColoredNavItem href={Paths.CREW}>
            <span className={styles.bold}>02</span>
            Crew
          </ColoredNavItem>

          <ColoredNavItem href={Paths.TECHNOLOGY}>
            <span className={styles.bold}>03</span>
            Technology
          </ColoredNavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
