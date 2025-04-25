import styles from './styles.module.scss';

const HomeLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default HomeLayout;
