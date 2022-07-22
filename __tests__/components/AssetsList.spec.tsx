import AccountContext from '@/contexts/account/context';
import AssetsContext from '@/contexts/assets/context';
import { AssetsList } from '@components';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import accountContextValue from '__mocks__/accountContext';
import assetsContextValue from '__mocks__/assetsContext';

describe('✅ <AssetsList />', () => {
  describe('➡️ Render', () => {
    it('should render correctly in first tab', () => {
      render(
        <AssetsContext.Provider value={assetsContextValue}>
          <AssetsList tabIndex={0} handleTabChange={jest.fn()} />
        </AssetsContext.Provider>,
      );

      expect(screen.getByRole('table')).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /ativo/i }));
      expect(screen.getByRole('columnheader', { name: /qtde/i })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /valor/i })).toBeInTheDocument();
      expect(screen.getAllByRole('row')).toHaveLength(3);
    });

    it('should render correctly in second tab', () => {
      render(
        <AssetsContext.Provider value={assetsContextValue}>
          <AssetsList tabIndex={1} handleTabChange={jest.fn()} />
        </AssetsContext.Provider>,
      );

      expect(screen.getByRole('table')).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /ativo/i }));
      expect(screen.getByRole('columnheader', { name: /qtde/i })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /valor/i })).toBeInTheDocument();
      expect(screen.getAllByRole('row')).toHaveLength(10);
    });
  });

  describe('➡️ Behavior', () => {
    it('should open an asset purchase modal when clicking on buy asset button', async () => {
      render(
        <AccountContext.Provider value={accountContextValue}>
          <AssetsContext.Provider value={assetsContextValue}>
            <AssetsList tabIndex={1} handleTabChange={jest.fn()} />
          </AssetsContext.Provider>
        </AccountContext.Provider>,
      );

      const firstAssetRow = screen.getAllByRole('row')[1];
      const button = within(firstAssetRow).getByRole('button', { name: /c/i });

      await userEvent.click(button);

      expect(screen.getByRole('heading', { name: /comprar ação/i })).toBeInTheDocument();
    });
  });
});
