"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  href: string;
}

const NavItem = ({ children, href }: Props) => {
  const path = usePathname();

  return (
    <li
      className={
        path === href
          ? `${styles.navItem} ${styles.active}`
          : `${styles.navItem}`
      }
    >
      <Link className={styles.navItemLink} href={href}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
