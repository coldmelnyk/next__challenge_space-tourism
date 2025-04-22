import Image from "next/image";
import Link from "next/link";
import { Barlow_Condensed } from "next/font/google";

import NavItem from "../NavItem/NavItem";

import styles from "./styles.module.scss";
import { NavItemProps } from "@/types/NavItemProps";
import LineComp from "../LineComp/LineComp";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
});

const ColoredNavItem = ({ children, href }: NavItemProps) => {
  return (
    <NavItem href={href} color="white">
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
          src={"/assets/shared/logo.svg"}
          alt="header-logo"
        />
      </Link>

      <nav className={styles.nav}>
        <LineComp isHeaderLine={true} />

        <ul className={styles.navList}>
          <ColoredNavItem href="/">
            <span className={styles.bold}>00</span>
            Home
          </ColoredNavItem>

          <ColoredNavItem href="/destination">
            <span className={styles.bold}>01</span>
            Destination
          </ColoredNavItem>

          <ColoredNavItem href="/crew">
            <span className={styles.bold}>02</span>
            Crew
          </ColoredNavItem>

          <ColoredNavItem href="/technology">
            <span className={styles.bold}>03</span>
            Technology
          </ColoredNavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
