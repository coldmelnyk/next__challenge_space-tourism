"use client";

import { usePathname } from "next/navigation";

import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

const BackgroundLayout = ({ children }: Props) => {
  const path = usePathname();

  let stylesForLayout = `${styles.backImage}`;
  let nameOfPath = path.split("/")[1];

  if (nameOfPath === "") {
    nameOfPath = "home";
    stylesForLayout += ` ${styles.flexBetween}`;
  }

  stylesForLayout += ` ${styles[nameOfPath]}`;

  return <main className={stylesForLayout}>{children}</main>;
};

export default BackgroundLayout;
