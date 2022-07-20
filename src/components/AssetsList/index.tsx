import useAssets from '@/hooks/useAssets';
import { AssetPurchaseModal, AssetSaleModal } from '@components';
import { useState } from 'react';
import AssetsListItem from './AssetsListItem';

type AssetsListProps = {
  tabIndex: number;
};

export default function AssetsList({ tabIndex }: AssetsListProps) {
  const [desiredAssetPurchase, setDesiredAssetPurchase] = useState<string | null>(null);
  const [desiredAssetSale, setDesiredAssetSale] = useState<string | null>(null);
  const { availableAssets, investments } = useAssets();

  const currentList = tabIndex === 0 ? investments : availableAssets;

  const handleDesiredAssetPurchase = (assetId: string) => {
    setDesiredAssetPurchase(assetId);
  };

  const handleDesiredAssetSale = (assetId: string) => {
    setDesiredAssetSale(assetId);
  };

  return (
    <>
      <div className="mx-auto overflow-x-auto max-w-prose">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Ação</th>
              <th>Qtde</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {currentList.map((asset) => (
              <AssetsListItem
                asset={asset}
                key={asset.ticker}
                handleDesiredAssetPurchase={handleDesiredAssetPurchase}
                handleDesiredAssetSale={handleDesiredAssetSale}
              />
            ))}
          </tbody>
        </table>
      </div>
      {desiredAssetPurchase && <AssetPurchaseModal desiredAsset={desiredAssetPurchase} />}
      {desiredAssetSale && <AssetSaleModal desiredAsset={desiredAssetSale} />}
    </>
  );
}
