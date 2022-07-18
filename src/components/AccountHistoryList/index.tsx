import { AccountHistory } from '@/types/shared';
import AccountHistoryListitem from './AccountHistoryListitem';

type AccountHistoryListProps = {
  accountHistory: AccountHistory[];
};

export default function AccountHistoryList({
  accountHistory,
}: AccountHistoryListProps) {
  return (
    <div className="overflow-x-auto max-w-[500px] mx-auto">
      <table className="table w-full">
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
