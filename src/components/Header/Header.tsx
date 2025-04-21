import Image from "next/image";
import Link from "next/link";
import { Barlow_Condensed } from "next/font/google";

import NavItem from "../NavItem/NavItem";

import styles from "./styles.module.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
});

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
        <div className={styles.line} />
        <ul className={styles.navList}>
          <NavItem href="/">
            <span className={styles.bold}>00</span>
            Home
          </NavItem>

          <NavItem href="/destination">
            <span className={styles.bold}>01</span>
            Destination
          </NavItem>

          <NavItem href="/crew">
            <span className={styles.bold}>02</span>
            Crew
          </NavItem>

          <NavItem href="/technology">
            <span className={styles.bold}>03</span>
            Technology
          </NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
