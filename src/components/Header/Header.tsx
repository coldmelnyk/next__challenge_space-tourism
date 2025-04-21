import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";
import NavItem from "../NavItem/NavItem";

const Header = () => {
  return (
    <header className={styles.header}>
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
