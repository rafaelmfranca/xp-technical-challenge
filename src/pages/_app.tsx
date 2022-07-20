import AccountProvider from '@/contexts/account';
import AssetsProvider from '@/contexts/assets';
import AuthProvider from '@/contexts/auth';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <AuthProvider>
        <AccountProvider>
          <AssetsProvider>
            <Component {...pageProps} />
          </AssetsProvider>
        </AccountProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
