import { TabSwitcher } from '@components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const tabSwitcherProps = (activeTab: number) => ({
  tabIndex: activeTab,
  handleTabChange: () => jest.fn(),
});

describe('✅ <Balance />', () => {
  describe('➡️ Render', () => {
    it('should render correctly', () => {
      render(<TabSwitcher {...tabSwitcherProps(1)} />);

      expect(
        screen.getByRole('button', { name: /minhas ações/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /disponíveis/i }),
      ).toBeInTheDocument();
    });
  });

  describe('➡️ Behavior', () => {
    it('should switch between tabs on click', async () => {
      render(<TabSwitcher {...tabSwitcherProps(0)} />);

      const firstTab = screen.getByRole('button', { name: /minhas ações/i });
      const secondTab = screen.getByRole('button', { name: /disponíveis/i });

      await userEvent.click(secondTab);
      await userEvent.click(firstTab);

      expect(firstTab).toHaveClass('tab-active');
    });
  });
});
