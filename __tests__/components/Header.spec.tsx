import { Header } from '@components';
import { render, screen } from '@testing-library/react';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('✅ <Header />', () => {
  const router = { asPath: '/ativos', push: jest.fn() };
  useRouter.mockReturnValue(router);

  describe('➡️ Render', () => {
    it('should render correctly', () => {
      render(<Header />);

      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.getByRole('list')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByRole('img', { name: /avatar/i })).toBeInTheDocument();
    });

    it('should render list items correctly', () => {
      render(<Header />);

      const listItems = screen.getAllByRole('listitem');

      expect(listItems).toHaveLength(2);
      expect(listItems[0]).toHaveTextContent('Ativos');
      expect(listItems[1]).toHaveTextContent('Conta');
    });

    it('should render links correctly', () => {
      render(<Header />);

      expect(screen.getByRole('link', { name: /ativos/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /conta/i })).toBeInTheDocument();
    });
  });
});
