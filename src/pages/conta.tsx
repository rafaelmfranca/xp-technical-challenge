import AccountProvider from '@/contexts/account';
import useAccount from '@/hooks/useAccount';
import {
  AccountHistoryList,
  Balance,
  DepositModal,
  Header,
  WithdrawModal,
} from '@components';

export default function Conta() {
  const { accountHistory, balance } = useAccount();

  return (
    <AccountProvider>
      <Header />
      <Balance balance={balance} />
      {accountHistory.length > 0 && (
        <AccountHistoryList accountHistory={accountHistory} />
      )}
      <DepositModal />
      <WithdrawModal />
    </AccountProvider>
  );
}
