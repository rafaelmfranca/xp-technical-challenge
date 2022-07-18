import { AccountHistoryList } from '@components';
import { render, screen, within } from '@testing-library/react';
import accountHistory from '__mocks__/accountHistory';

describe('✅ <AccountHistoryList />', () => {
  describe('➡️ Render', () => {
    it('should render correct elements', () => {
      render(<AccountHistoryList accountHistory={accountHistory} />);

      expect(screen.getByRole('table')).toBeInTheDocument();
      expect(
        screen.getByRole('columnheader', { name: /resumo/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('columnheader', { name: /data/i }),
      ).toBeInTheDocument();
    });

    it('should render the list correctly', () => {
      render(<AccountHistoryList accountHistory={accountHistory} />);

      expect(screen.getAllByRole('row')).toHaveLength(5);
      expect(screen.getAllByRole('img')).toHaveLength(4);

      const firstRow = screen.getByRole('row', { name: /r\$ 1\.000,00/i });

      expect(firstRow).toBeInTheDocument();
      expect(within(firstRow).getByRole('img')).toBeInTheDocument();
      expect(within(firstRow).getByText(/depósito/i)).toBeInTheDocument();
      expect(within(firstRow).getByText(/17 de julho/i)).toBeInTheDocument();
    });
  });
});
