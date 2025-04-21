import type { Metadata } from "next";

import Header from "@/components/Header/Header";

import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Space tourism",
  description: "So, you want to travel to space - let's face it!",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.backImage}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
