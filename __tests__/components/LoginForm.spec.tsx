import { LoginForm } from '@components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('✅ <Input />', () => {
  describe('➡️ Render', () => {
    it('should render correctly', () => {
      render(<LoginForm />);

      expect(screen.getByText(/e\-mail/i)).toBeInTheDocument();
      expect(screen.getByText(/senha/i)).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /acessar/i }),
      ).toBeInTheDocument();
    });
  });

  describe('➡️ Behavior', () => {
    it('should submit the form when all fields are filled correctly', async () => {
      render(<LoginForm />);

      const emailInput = screen.getByTestId('email-input');
      const passwordInput = screen.getByTestId('password-input');
      const loginButton = screen.getByRole('button', { name: /acessar/i });

      await userEvent.type(emailInput, 'cliente@xp.com');
      await userEvent.type(passwordInput, '12345678');

      expect(loginButton).toBeEnabled();
      await userEvent.click(loginButton);

      expect(loginButton).toHaveClass('loading');
    });

    it('should not submit the form when one field are filled incorrectly', async () => {
      render(<LoginForm />);

      const emailInput = screen.getByTestId('email-input');
      const passwordInput = screen.getByTestId('password-input');
      const loginButton = screen.getByRole('button', { name: /acessar/i });

      await userEvent.type(emailInput, 'cliente@xp.com');
      await userEvent.type(passwordInput, '1234567');

      expect(loginButton).not.toBeEnabled();
    });
  });
});
