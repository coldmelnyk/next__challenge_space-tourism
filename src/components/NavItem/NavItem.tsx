'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import styles from './styles.module.scss';
import { useState } from 'react';

type NavItemType = 'Button' | 'HeaderLink';

interface Props {
  children: React.ReactNode;
  href: string;
  stylesProps: object;
  type: NavItemType;
}

const NavItem = ({ children, href, stylesProps, type }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const path = usePathname();
  const searchParams = useSearchParams();

  const mouseClick = (click: MouseEvent) => {
    if (click.target as HTMLAnchorElement) {
      setIsClicked(false);
    }
  };

  let basicStylesString = `${styles.navItem}`;
  let queryParams = searchParams.get('planet');

  if (!queryParams) {
    queryParams = 'moon';
  }

  const isActiveLink =
    path === href || `${path}?planet=${queryParams}` === href;

  if (isClicked) {
    basicStylesString += ` ${styles.clicked}`;
  }

  return (
    <li
      className={
        isActiveLink
          ? `${basicStylesString} ${styles.active}`
          : `${basicStylesString}`
      }
    >
      <Link
        style={isActiveLink ? { ...stylesProps, color: 'white' } : stylesProps}
        href={href}
        onClick={() => {
          if (type === 'Button') {
            setIsClicked(true);

            document.addEventListener('click', mouseClick);

            setTimeout(() => {
              setIsClicked(false);
              document.removeEventListener('click', mouseClick);
            }, 3000);
          }
        }}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
