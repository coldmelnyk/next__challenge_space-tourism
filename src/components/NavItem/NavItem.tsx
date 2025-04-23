'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
  href: string;
  stylesProps: object;
}

const NavItem = ({ children, href, stylesProps }: Props) => {
  const path = usePathname();
  const searchParams = useSearchParams();

  let queryParams = searchParams.get('planet');

  if (!queryParams) {
    queryParams = 'moon';
  }

  const isActiveLink =
    path === href || `${path}?planet=${queryParams}` === href;

  return (
    <li
      className={
        isActiveLink
          ? `${styles.navItem} ${styles.active}`
          : `${styles.navItem}`
      }
    >
      <Link
        style={isActiveLink ? { ...stylesProps, color: 'white' } : stylesProps}
        href={href}
        onClick={() => console.log(href)}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
