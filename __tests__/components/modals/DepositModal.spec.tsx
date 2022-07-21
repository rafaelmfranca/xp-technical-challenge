import AccountContext from '@/contexts/account/context';
import { DepositModal } from '@components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import contextValue from '__mocks__/accountContext';

describe('✅ <DepositModal />', () => {
  describe('➡️ Render', () => {
    it('should render correctly', () => {
      render(
        <AccountContext.Provider value={contextValue}>
          <DepositModal />
        </AccountContext.Provider>,
      );

      expect(
        screen.getByRole('heading', {
          name: /insira o valor do depósito/i,
        }),
      ).toBeInTheDocument();

      expect(screen.getByText('Valor')).toBeInTheDocument();
      expect(screen.getByRole('spinbutton')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /solicitar depósito/i })).toBeInTheDocument();
    });
  });

  describe('➡️ Behavior', () => {
    it('submit button should be disabled by default', () => {
      render(
        <AccountContext.Provider value={contextValue}>
          <DepositModal />
        </AccountContext.Provider>,
      );

      expect(screen.getByRole('button', { name: /solicitar depósito/i })).toBeDisabled();
    });

    it('submit button should be enabled when typing a value greather than 0', async () => {
      render(
        <AccountContext.Provider value={contextValue}>
          <DepositModal />
        </AccountContext.Provider>,
      );

      const valueInput = screen.getByRole('spinbutton');

      await userEvent.type(valueInput, '1');

      expect(screen.getByRole('button', { name: /solicitar depósito/i })).toBeEnabled();
    });

    it('should submit the form correctly', async () => {
      render(
        <AccountContext.Provider value={contextValue}>
          <DepositModal />
        </AccountContext.Provider>,
      );

      const valueInput = screen.getByRole('spinbutton');
      const submitButton = screen.getByRole('button', { name: /solicitar depósito/i });

      await userEvent.type(valueInput, '1');
      await userEvent.click(submitButton);

      expect(submitButton).toHaveClass('loading');
    });
  });
});
