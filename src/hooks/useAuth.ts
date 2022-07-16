import AuthContext from '@/contexts/auth/context';
import { useContext } from 'react';

export default function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
