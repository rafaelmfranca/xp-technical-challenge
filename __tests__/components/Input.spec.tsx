import { Input } from '@components';
import { render, screen } from '@testing-library/react';

const defaultInputVariant = {
  name: 'name',
  label: 'Nome',
  type: 'text',
  placeholder: 'John Doe',
};

const errorInputVariant = {
  ...defaultInputVariant,
  error: { type: 'required', message: 'Nome é obrigatório' },
};

describe('✅ <Input />', () => {
  describe('➡️ Render', () => {
    it('should render correctly', () => {
      render(<Input {...defaultInputVariant} />);

      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should render correctly when "error" prop is passed', () => {
      render(<Input {...errorInputVariant} />);

      expect(screen.getByText(/nome é obrigatório/i)).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveClass('input-error');
    });
  });
});
