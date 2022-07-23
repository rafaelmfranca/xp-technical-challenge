import AccountProvider from '@/contexts/account';
import AssetsProvider from '@/contexts/assets';
import AuthProvider from '@/contexts/auth';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <AuthProvider>
        <AccountProvider>
          <AssetsProvider>
            <Head>
              <title>XP Inc.</title>
            </Head>
            <NextNProgress color="#1363DF" options={{ showSpinner: false }} />
            <Component {...pageProps} />
          </AssetsProvider>
        </AccountProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
