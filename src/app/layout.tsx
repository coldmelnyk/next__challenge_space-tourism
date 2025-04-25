import { Bellefair } from 'next/font/google';

import BackgroundLayout from '@/components/BackgroundLayout/BackgroundLayout';
import Header from '@/components/Header/Header';

import './globals.scss';

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400'
});

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={bellefair.className}>
      <BackgroundLayout>
        <Header />
        {children}
      </BackgroundLayout>
    </html>
  );
};

export default RootLayout;
