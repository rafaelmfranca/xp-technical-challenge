import { api } from '@/lib/axios';
import { AuthContextData, LoginPayload } from '@/types/shared';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import AuthContext from './context';

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [clientId, setClientId] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session) {
      const { email, clientId } = JSON.parse(session);
      setClientId(clientId);
      setEmail(email);
    }
  }, []);

  const handleLogin = async ({ email, password }: LoginPayload) => {
    const { data } = await api.post('api/login', { email, password });

    if (data.error) {
      setError('E-mail ou senha inválidos');
      return;
    }

    setClientId(data.clientId);
    setEmail(data.email);
    localStorage.setItem('session', JSON.stringify({ clientId: data.clientId, email: data.email }));
    error && setError('');
    router.push('/ativos');
  };

  const handleLogout = () => {
    localStorage.removeItem('session');
    setClientId('');
    setEmail('');
    router.push('/');
  };

  const contextValue: AuthContextData = {
    clientId,
    email,
    error,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
