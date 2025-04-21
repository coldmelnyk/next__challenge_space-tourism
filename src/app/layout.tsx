import type { Metadata } from "next";
import { Bellefair } from "next/font/google";

import Header from "@/components/Header/Header";

import styles from "./styles.module.scss";
import "./globals.css";
import BackgroundLayout from "@/components/BackgroundLayout/BackgroundLayout";

export const metadata: Metadata = {
  title: "Space tourism",
  description: "So, you want to travel to space - let's face it!",
};

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
      <body className={styles.body}>
        <BackgroundLayout>
          <Header />
          <div className={styles.container}>{children}</div>
        </BackgroundLayout>
      </body>
    </html>
  );
};

export default RootLayout;
