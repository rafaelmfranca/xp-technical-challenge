import useAssets from '@/hooks/useAssets';
import { AssetPurchaseModal, AssetSaleModal, EmptyList } from '@components';
import { useState } from 'react';
import AssetsListItem from './AssetsListItem';

type AssetsListProps = {
  tabIndex: number;
  handleTabChange: (index: number) => void;
};

export default function AssetsList({ tabIndex, handleTabChange }: AssetsListProps) {
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

  if (tabIndex === 0 && !investments.length) {
    return (
      <EmptyList
        handleTabChange={handleTabChange}
        message="Você ainda não possui nenhum ativo em sua carteira."
      />
    );
  }

  return (
    <>
      <div className="mx-auto overflow-x-auto max-w-prose">
        <table className="table w-full border border-base-100">
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
