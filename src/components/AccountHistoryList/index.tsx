import { AccountHistory } from '@/types/shared';
import AccountHistoryListitem from './AccountHistoryListitem';

type AccountHistoryListProps = {
  accountHistory: AccountHistory[];
};

export default function AccountHistoryList({ accountHistory }: AccountHistoryListProps) {
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
          {accountHistory.map(({ historyId, type, amount, createdAt }) => (
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
