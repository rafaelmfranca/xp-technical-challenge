import { api } from '@/lib/axios';
import { AuthContextData, LoginPayload } from '@/types/shared';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import AuthContext from './context';

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const localSession = localStorage.getItem('session');
    localSession && setIsAuthenticated(true);
  }, []);

  const handleLogin = async ({ email, password }: LoginPayload) => {
    const { data } = await api.post('api/login', { email, password });

    if (data.error) {
      setError('E-mail ou senha inválidos');
      return;
    }

    localStorage.setItem('session', JSON.stringify(data.email));
    error && setError('');
    setIsAuthenticated(true);
    router.push('/ativos');
  };

  const contextValue: AuthContextData = {
    isAuthenticated,
    error,
    handleLogin,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
