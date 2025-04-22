"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  href: string;
  color: string;
}

const NavItem = ({ children, href, color = 'white' }: Props) => {
  const path = usePathname();

  return (
    <li
      className={
        path === href
          ? `${styles.navItem} ${styles.active}`
          : `${styles.navItem}`
      }
    >
      <Link className={styles.navItemLink} style={{ color: `${color}` }} href={href}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
