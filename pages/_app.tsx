import '../styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import DefaultLayout from '../components/layouts/_defaultLayout';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </NextUIProvider>
  );
}

export default MyApp;
