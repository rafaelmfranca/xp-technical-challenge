import useSession from '@/hooks/useSession';
import { api, fetcher } from '@/lib/axios';
import {
  AccountContextData,
  AccountHistory,
  DepositPayload,
  WithdrawalPayload,
} from '@/types/shared';
import { ReactNode, useEffect, useState } from 'react';
import useSWR from 'swr';
import AccountContext from './context';

type AccountProviderProps = {
  children: ReactNode;
};

export default function AccountProvider({ children }: AccountProviderProps) {
  const { data } = useSWR('/api/conta', fetcher, {
    revalidateIfStale: true,
  });
  const [accountHistory, setAccountHistory] = useState<AccountHistory[]>([]);
  const [balance, setBalance] = useState(0.0);
  const { email } = useSession();

  useEffect(() => {
    if (data) {
      setAccountHistory(data.accountHistory);
      setBalance(Number(data.balance));
    }
  }, [data]);

  const handleAddDeposit = async (depositPayload: DepositPayload) => {
    await api.post('api/conta/deposito', { ...depositPayload, email });
  };

  const handleAddWithdrawal = async (withdrawalPayload: WithdrawalPayload) => {
    await api.post('api/conta/retirada', { ...withdrawalPayload, email });
  };

  const contextValue: AccountContextData = {
    accountHistory,
    balance,
    handleAddDeposit,
    handleAddWithdrawal,
  };

  return (
    <AccountContext.Provider value={contextValue}>
      {children}
    </AccountContext.Provider>
  );
}
