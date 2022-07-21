import AccountProvider from '@/contexts/account';
import AssetsProvider from '@/contexts/assets';
import AuthProvider from '@/contexts/auth';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <AuthProvider>
        <AccountProvider>
          <AssetsProvider>
            <NextNProgress color="#1363DF" options={{ showSpinner: false }} />
            <Component {...pageProps} />
          </AssetsProvider>
        </AccountProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
