import useAssets from '@/hooks/useAssets';
import { AssetPurchaseModal } from '@components';
import { useState } from 'react';
import AssetsListItem from './AssetsListItem';

type AssetsListProps = {
  tabIndex: number;
};

export default function AssetsList({ tabIndex }: AssetsListProps) {
  const [desiredAsset, setDesiredAsset] = useState<string | null>(null);
  const { availableAssets, investments } = useAssets();

  const currentList = tabIndex === 0 ? investments : availableAssets;

  const handleAssetToBuy = (assetId: string) => {
    setDesiredAsset(assetId);
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
                handleAssetToBuy={handleAssetToBuy}
              />
            ))}
          </tbody>
        </table>
      </div>
      {desiredAsset && <AssetPurchaseModal desiredAsset={desiredAsset} />}
    </>
  );
}
