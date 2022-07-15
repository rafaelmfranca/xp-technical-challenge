import { render, screen } from '@testing-library/react';
import Home from 'src/pages/index';

describe('first', () => {
  it('', async () => {
    render(<Home />);

    expect(screen.getByText(/hello worl/i)).toBeInTheDocument();
  });
});
