import AssetsContext from '@/contexts/assets/context';
import { AssetsList } from '@components';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import contextValue from '__mocks__/assetsContext';

describe('✅ <AssetsList />', () => {
  describe('➡️ Render', () => {
    it('should render correctly in first tab', () => {
      render(
        <AssetsContext.Provider value={contextValue}>
          <AssetsList tabIndex={0} />
        </AssetsContext.Provider>,
      );

      expect(screen.getByRole('table')).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /ação/i }));
      expect(
        screen.getByRole('columnheader', { name: /qtde/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('columnheader', { name: /valor/i }),
      ).toBeInTheDocument();
      expect(screen.getAllByRole('row')).toHaveLength(3);
    });

    it('should render correctly in second tab', () => {
      render(
        <AssetsContext.Provider value={contextValue}>
          <AssetsList tabIndex={1} />
        </AssetsContext.Provider>,
      );

      expect(screen.getByRole('table')).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /ação/i }));
      expect(
        screen.getByRole('columnheader', { name: /qtde/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('columnheader', { name: /valor/i }),
      ).toBeInTheDocument();
      expect(screen.getAllByRole('row')).toHaveLength(10);
    });
  });

  describe('➡️ Behavior', () => {
    it('should open a modal when clicking on buy asset button', async () => {
      render(
        <AssetsContext.Provider value={contextValue}>
          <AssetsList tabIndex={1} />
        </AssetsContext.Provider>,
      );

      const row = screen.getByRole('row', {
        name: /ativo abev3 abev3 \-0\.10 200 r\$ 14,43 compra/i,
      });

      const button = within(row).getByRole('button', {
        name: /compra/i,
      });

      await userEvent.click(button);

      expect(
        screen.getByRole('heading', { name: /comprar ação/i }),
      ).toBeInTheDocument();
    });
  });
});
