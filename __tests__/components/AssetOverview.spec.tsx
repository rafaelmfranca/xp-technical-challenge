import { AssetOverview } from '@components';
import { render, screen } from '@testing-library/react';
import availableAssets from '__mocks__/availableAssets';

describe('✅ <AssetOverview />', () => {
  describe('➡️ Render', () => {
    it('should render correctly when passing some asset', () => {
      render(<AssetOverview asset={availableAssets[0]} />);

      expect(
        screen.getByRole('img', { name: /ativo abev3/i }),
      ).toBeInTheDocument();
      expect(screen.getByText(/valor/i)).toBeInTheDocument();
      expect(screen.getByText(/qtde\. disponível/i)).toBeInTheDocument();
      expect(screen.getByText(/200/i)).toBeInTheDocument();
    });

    it('should render correct asset variation infos', () => {
      render(<AssetOverview asset={availableAssets[0]} />);

      expect(screen.getByText(/abev3/i)).toBeInTheDocument();
      expect(
        screen.getByRole('img', { name: /seta para baixo/i }),
      ).toBeInTheDocument();
      expect(screen.getByText(/\-0\.10/i)).toBeInTheDocument();
    });

    it('should render correct asset variation infos', () => {
      render(<AssetOverview asset={availableAssets[1]} />);

      expect(screen.getByText(/petr4/i)).toBeInTheDocument();
      expect(
        screen.getByRole('img', { name: /seta para cima/i }),
      ).toBeInTheDocument();
      expect(screen.getByText(/0\.64/i)).toBeInTheDocument();
    });
  });
});
