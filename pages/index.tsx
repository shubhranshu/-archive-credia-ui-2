import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <p className={styles.description}>
      <Link href="taxCalc/IncomeTaxCalc">Estimate income tax</Link>
    </p>
  );
};

export default Home;
