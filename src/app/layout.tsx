import type { Metadata } from "next";
import { Bellefair } from "next/font/google";

import Header from "@/components/Header/Header";
import BackgroundLayout from "@/components/BackgroundLayout/BackgroundLayout";

import styles from "./styles.module.scss";
import "./globals.css";

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
          <main className={styles.main}>{children}</main>
        </BackgroundLayout>
      </body>
    </html>
  );
};

export default RootLayout;
