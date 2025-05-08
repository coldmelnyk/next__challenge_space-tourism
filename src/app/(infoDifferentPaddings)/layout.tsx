import PageTitle from '@/components/PageTitle/PageTitle';

import styles from './styles.module.scss';
import '../globals.scss';

const InfoLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main id="main" className={styles.main}>
      <article className={styles.article}>
        <PageTitle />
        {children}
      </article>
    </main>
  );
};

export default InfoLayout;
