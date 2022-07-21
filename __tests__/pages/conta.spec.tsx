import AccountContext from '@/contexts/account/context';
import AuthContext from '@/contexts/auth/context';
import Conta from '@/pages/conta';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import accountContextValue from '__mocks__/accountContext';
import authContextValue from '__mocks__/authContext';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('✅ <Home />', () => {
  const router = { asPath: '/conta', push: jest.fn() };
  useRouter.mockReturnValue(router);

  describe('➡️ Render', () => {
    it('should render the page', () => {
      render(
        <AuthContext.Provider value={authContextValue}>
          <AccountContext.Provider value={accountContextValue}>
            <Conta />
          </AccountContext.Provider>
        </AuthContext.Provider>,
      );

      expect(screen.queryByText(/r\$ 510,00/i)).toBeInTheDocument();
      expect(screen.getByText(/saldo em conta/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Depósito' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Retirada' })).toBeInTheDocument();
      expect(screen.getByRole('table')).toBeInTheDocument();
    });
  });

  describe('➡️ Behavior', () => {
    it('should switch between tabs correctly in filter by type', async () => {
      render(
        <AuthContext.Provider value={authContextValue}>
          <AccountContext.Provider value={accountContextValue}>
            <Conta />
          </AccountContext.Provider>
        </AuthContext.Provider>,
      );

      const firstTab = screen.getByRole('button', { name: /todas/i });
      const secondTab = screen.getByRole('button', { name: 'Depósitos' });
      const thirdTab = screen.getByRole('button', { name: 'Retiradas' });

      expect(firstTab).toHaveClass('tab-active');

      await userEvent.click(secondTab);
      expect(secondTab).toHaveClass('tab-active');

      await userEvent.click(thirdTab);
      expect(thirdTab).toHaveClass('tab-active');

      await userEvent.click(firstTab);
      expect(firstTab).toHaveClass('tab-active');
    });
  });
});
