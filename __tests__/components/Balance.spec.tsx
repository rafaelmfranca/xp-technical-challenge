import { Balance } from '@components';
import { render, screen } from '@testing-library/react';

describe('✅ <Balance />', () => {
  describe('➡️ Render', () => {
    it('should render correctly', () => {
      render(<Balance balance={20.5} />);

      expect(screen.getByText(/saldo em conta/i)).toBeInTheDocument();
      expect(screen.getByText(/r\$ 20,50/i)).toBeInTheDocument();
      expect(screen.getByText(/atualizado em/i)).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /depósito/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /retirada/i }),
      ).toBeInTheDocument();
    });
  });

  describe('➡️ Behavior', () => {
    it('withdrawal button should be disabled when balance is 0', async () => {
      render(<Balance balance={0} />);

      const depositBtn = screen.getByRole('button', { name: /depósito/i });
      const withdrawalBtn = screen.getByRole('button', { name: /retirada/i });

      expect(depositBtn).toBeEnabled();
      expect(withdrawalBtn).toBeDisabled();
    });
  });
});
