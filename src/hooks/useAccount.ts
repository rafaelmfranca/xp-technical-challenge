import AccountContext from '@/contexts/account/context';
import { useContext } from 'react';

export default function useAccount() {
  const context = useContext(AccountContext);
  return context;
}
