import Home from '@/pages';
import { render, screen } from '@testing-library/react';

describe('✅ <Home />', () => {
  describe('➡️ Render', () => {
    it('should render the page', () => {
      render(<Home />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('should render the hero', () => {
      render(<Home />);
      expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('should have an email and password fields', () => {
      render(<Home />);

      expect(screen.getByText(/e\-mail/i)).toBeInTheDocument();
      expect(screen.getByText(/senha/i)).toBeInTheDocument();
    });

    it('should have an login button', () => {
      render(<Home />);

      expect(
        screen.getByRole('button', { name: /acessar/i }),
      ).toBeInTheDocument();
    });
  });
});
