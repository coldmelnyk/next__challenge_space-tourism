import type { Metadata } from "next";

import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
