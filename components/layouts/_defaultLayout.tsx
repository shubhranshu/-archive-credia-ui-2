import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Footer from '../ui/Footer';
import Header from '../ui/Header';

export default function DefaultLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boble</title>
        <meta name="description" content="Manage your money" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        {children}
      </main>
      <Footer />
    </div>
  );
}
