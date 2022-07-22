import AccountProvider from '@/contexts/account';
import useAccount from '@/hooks/useAccount';
import {
  AccountHistoryList,
  Balance,
  DepositModal,
  EmptyList,
  FilterSwitcher,
  Header,
  WithdrawModal,
} from '@components';
import { useState } from 'react';

export default function Conta() {
  const [tabIndex, setTabIndex] = useState(0);
  const { accountHistory, balance } = useAccount();

  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <AccountProvider>
      <Header />
      <Balance balance={balance} />
      {accountHistory.length > 0 ? (
        <>
          <FilterSwitcher tabIndex={tabIndex} handleTabChange={handleTabChange} />
          <AccountHistoryList accountHistory={accountHistory} tabIndex={tabIndex} />
        </>
      ) : (
        <EmptyList message="Você ainda não efetuou nenhuma transação." />
      )}
      <DepositModal />
      <WithdrawModal />
    </AccountProvider>
  );
}
