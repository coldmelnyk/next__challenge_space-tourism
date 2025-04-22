"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

const BackgroundLayout = ({ children }: Props) => {
  const path = usePathname();
  let classList = `${styles.body}`;

  let nameOfPath = path.split("/")[1];

  if (nameOfPath === "") {
    nameOfPath = "home";
    classList += ` ${styles.flexBetween}`;
  }

  return (
    <body className={classList}>
      <Image
        src={`/assets/${nameOfPath}/background-${nameOfPath}-desktop.jpg`}
        alt={`background-picture-${nameOfPath}`}
        fill
        style={{ zIndex: -1 }}
        priority
      />
      {children}
    </body>
  );
};

export default BackgroundLayout;
