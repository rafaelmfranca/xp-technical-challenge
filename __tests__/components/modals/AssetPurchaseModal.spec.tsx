import AccountContext from '@/contexts/account/context';
import { AssetPurchaseModal } from '@components';
import { render, screen } from '@testing-library/react';
import contextValue from '__mocks__/accountContext';

describe('✅ <AssetPurchaseModal />', () => {
  describe('➡️ Render', () => {
    it('should render correctly', () => {
      render(
        <AccountContext.Provider value={contextValue}>
          <AssetPurchaseModal desiredAsset={'cl5rc8b3l0172zyrye61wuazw'} />
        </AccountContext.Provider>,
      );

      expect(screen.getByRole('heading', { name: /comprar ação/i })).toBeInTheDocument();
      expect(screen.getByText(/quantidade/i)).toBeInTheDocument();
      expect(screen.getByRole('spinbutton')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /comprar/i })).toBeInTheDocument();
    });
  });
});
