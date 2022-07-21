import { AccountHistory } from '@/types/shared';
import AccountHistoryListitem from './AccountHistoryListitem';

type AccountHistoryListProps = {
  accountHistory: AccountHistory[];
  tabIndex: number;
};

export default function AccountHistoryList({ accountHistory, tabIndex }: AccountHistoryListProps) {
  let filteredAccountHistory = accountHistory;

  if (tabIndex === 1) {
    filteredAccountHistory = accountHistory.filter(({ type }) => type === 'DEPOSIT');
  }

  if (tabIndex === 2) {
    filteredAccountHistory = accountHistory.filter(({ type }) => type === 'WITHDRAWAL');
  }

  return (
    <div className="mx-auto overflow-x-auto max-w-prose">
      <table className="table w-full border border-base-100">
        <thead>
          <tr>
            <th></th>
            <th>Resumo</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {filteredAccountHistory.map(({ historyId, type, amount, createdAt }) => (
            <AccountHistoryListitem
              key={historyId}
              type={type}
              amount={amount}
              createdAt={createdAt}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
