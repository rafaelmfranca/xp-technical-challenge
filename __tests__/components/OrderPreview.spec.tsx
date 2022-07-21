import AccountContext from '@/contexts/account/context';
import { OrderPreview } from '@components';
import { render, screen } from '@testing-library/react';
import accountContextValue from '__mocks__/accountContext';

describe('✅ <AssetOverview />', () => {
  describe('➡️ Render', () => {
    it('should render correctly', () => {
      render(
        <AccountContext.Provider value={accountContextValue}>
          <OrderPreview isValid={true} unitPrice={10.5} amount={1} />
        </AccountContext.Provider>,
      );

      expect(screen.getByText(/saldo disponível/i)).toBeInTheDocument();
      expect(screen.getByText(/valor da ordem/i)).toBeInTheDocument();
      expect(screen.getByText(/r\$ 510,00/i)).toBeInTheDocument();
      expect(screen.getByText(/r\$ 10,50/i)).toBeInTheDocument();
    });

    it('should render correctly when "isValid" prop is false', () => {
      render(
        <AccountContext.Provider value={accountContextValue}>
          <OrderPreview isValid={false} unitPrice={10.5} amount={10} />
        </AccountContext.Provider>,
      );

      expect(screen.getByText(/r\$ 0,00/i)).toBeInTheDocument();
    });
  });
});
