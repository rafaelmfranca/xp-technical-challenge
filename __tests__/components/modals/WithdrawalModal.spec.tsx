import AccountContext from '@/contexts/account/context';
import { WithdrawModal } from '@components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import contextValue from '__mocks__/accountContext';

describe('✅ <WithdrawModal />', () => {
  describe('➡️ Render', () => {
    it('should render correctly', () => {
      render(
        <AccountContext.Provider value={contextValue}>
          <WithdrawModal />
        </AccountContext.Provider>,
      );

      expect(
        screen.getByRole('heading', {
          name: /insira o valor da retirada/i,
        }),
      ).toBeInTheDocument();

      expect(screen.getByText('Valor')).toBeInTheDocument();
      expect(screen.getByRole('spinbutton')).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /confirmar/i }),
      ).toBeInTheDocument();
    });
  });

  describe('➡️ Behavior', () => {
    it('submit button should be disabled by default', () => {
      render(
        <AccountContext.Provider value={contextValue}>
          <WithdrawModal />
        </AccountContext.Provider>,
      );

      expect(screen.getByRole('button', { name: /confirmar/i })).toBeDisabled();
    });

    it('submit button should be enabled when typing a value greather than 0', async () => {
      render(
        <AccountContext.Provider value={contextValue}>
          <WithdrawModal />
        </AccountContext.Provider>,
      );

      const valueInput = screen.getByRole('spinbutton');

      await userEvent.type(valueInput, '1');

      expect(screen.getByRole('button', { name: /confirmar/i })).toBeEnabled();
    });

    it('should show correct message when typing a value greather than balance', async () => {
      render(
        <AccountContext.Provider value={contextValue}>
          <WithdrawModal />
        </AccountContext.Provider>,
      );

      const valueInput = screen.getByRole('spinbutton');

      await userEvent.type(valueInput, '511');

      expect(
        screen.getByText(/o valor deve ser menor que o saldo atual/i),
      ).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /confirmar/i })).toBeDisabled();
    });

    it('should submit the form correctly', async () => {
      render(
        <AccountContext.Provider value={contextValue}>
          <WithdrawModal />
        </AccountContext.Provider>,
      );

      const valueInput = screen.getByRole('spinbutton');
      const submitButton = screen.getByRole('button', { name: /confirmar/i });

      await userEvent.type(valueInput, '1');
      await userEvent.click(submitButton);

      expect(submitButton).toHaveClass('loading');
    });
  });
});
