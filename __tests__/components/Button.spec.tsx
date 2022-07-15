import { Button } from '@components';
import { render, screen } from '@testing-library/react';

const defaultButtonVariant = {
  label: 'Acessar',
  isSubmitting: false,
  isValid: false,
};

const enabledButtonVariant = {
  ...defaultButtonVariant,
  isValid: true,
};

const submittingButtonVariant = {
  ...defaultButtonVariant,
  isSubmitting: true,
};

describe('✅ <Button />', () => {
  describe('➡️ Render', () => {
    it('should render correctly', () => {
      render(<Button {...defaultButtonVariant} />);

      expect(
        screen.getByRole('button', { name: /acessar/i }),
      ).toBeInTheDocument();
    });

    it('should be disabled when "isValid" prop is false', () => {
      render(<Button {...defaultButtonVariant} />);

      expect(screen.getByRole('button', { name: /acessar/i })).toBeDisabled();
    });

    it('should not be disabled when "isValid" prop is true', () => {
      render(<Button {...enabledButtonVariant} />);

      expect(
        screen.getByRole('button', { name: /acessar/i }),
      ).not.toBeDisabled();
    });

    it('should have "loading" class when "isSubmitting" prop is true', () => {
      render(<Button {...submittingButtonVariant} />);

      expect(screen.getByRole('button', { name: /acessar/i })).toHaveClass(
        'loading',
      );
    });
  });
});
