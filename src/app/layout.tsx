import { Bellefair } from "next/font/google";

import Header from "@/components/Header/Header";
import BackgroundLayout from "@/components/BackgroundLayout/BackgroundLayout";

import styles from "./styles.module.scss";
import "./globals.css";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={bellefair.className}>
      <body className={`${styles.body} ${styles.flexBetween}`}>
        <BackgroundLayout />
        <Header />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
