import type { Metadata } from "next";
import { Bellefair } from "next/font/google";

import Header from "@/components/Header/Header";

import styles from "./styles.module.css";
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
        <main className={styles.backImage}>
          <Header />
          <div className={styles.container}>{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
