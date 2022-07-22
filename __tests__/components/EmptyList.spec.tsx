import { EmptyList } from '@components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('✅ <EmptyList />', () => {
  const handleTabChange = jest.fn().mockResolvedValueOnce(1);

  describe('➡️ Render', () => {
    it('should render correctly', () => {
      render(<EmptyList message="Some message" />);

      expect(screen.getByRole('img', { name: /atenção/i })).toBeInTheDocument();
      expect(screen.getByText(/some message/i)).toBeInTheDocument();
    });

    it('should render a button when "handleTabChange" prop is passed', () => {
      render(<EmptyList message="Some message" handleTabChange={handleTabChange} />);

      expect(
        screen.getByRole('button', { name: /veja as opções de ativos!/i }),
      ).toBeInTheDocument();
    });

    it('should render another message when "subMessage" prop is passed', () => {
      render(
        <EmptyList
          message="Some message"
          handleTabChange={handleTabChange}
          subMessage="Another message"
        />,
      );

      expect(screen.getByText(/another message/i)).toBeInTheDocument();
    });
  });

  describe('➡️ Behavior', () => {
    it('should call "handleTabChange" when button is clicked', async () => {
      render(<EmptyList message="Some message" handleTabChange={handleTabChange} />);

      const button = screen.getByRole('button', { name: /veja as opções de ativos!/i });
      await userEvent.click(button);

      expect(handleTabChange).toHaveBeenCalledTimes(1);
      expect(handleTabChange).toHaveBeenCalledWith(1);
    });
  });
});
