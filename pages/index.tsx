import { Button } from '@mui/material';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <p>
      <Button href="taxCalc/IncomeTaxCalc">Estimate income tax</Button>
    </p>
  );
};

export default Home;
