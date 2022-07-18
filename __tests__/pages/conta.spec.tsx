import AccountContext from '@/contexts/account/context';
import AuthProvider from '@/contexts/auth';
import Conta from '@/pages/conta';
import { render, screen } from '@testing-library/react';
import contextValue from '__mocks__/accountContext';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('✅ <Home />', () => {
  const router = { asPath: '/ativos', push: jest.fn() };
  useRouter.mockReturnValue(router);

  describe('➡️ Render', () => {
    it('should render the page', () => {
      render(
        <AuthProvider>
          <AccountContext.Provider value={contextValue}>
            <Conta />
          </AccountContext.Provider>
        </AuthProvider>,
      );

      expect(router.asPath).toBe('/ativos');
      expect(screen.queryByText(/r\$ 510,00/i)).toBeInTheDocument();
      expect(screen.getByText(/saldo em conta/i)).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /depósito/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /retirada/i }),
      ).toBeInTheDocument();
      expect(screen.getByRole('table')).toBeInTheDocument();
    });
  });
});
