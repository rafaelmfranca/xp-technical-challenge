import { render, screen } from '@testing-library/react';
import Home from 'src/pages/index';

describe('first describe', () => {
  it('first it', async () => {
    render(<Home />);

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
