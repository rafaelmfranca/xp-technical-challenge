import useAssets from '@/hooks/useAssets';
import {
  AssetPurchaseModal,
  AssetSaleModal,
  AssetsListItem,
  AssetsSearchInput,
  EmptyList,
} from '@components';
import { useState } from 'react';

type AssetsListProps = {
  tabIndex: number;
  handleTabChange: (index: number) => void;
};

export default function AssetsList({ tabIndex, handleTabChange }: AssetsListProps) {
  const [desiredAssetPurchase, setDesiredAssetPurchase] = useState<string | null>(null);
  const [desiredAssetSale, setDesiredAssetSale] = useState<string | null>(null);
  const [assetSearch, setAssetSearch] = useState('');
  const { availableAssets, investments } = useAssets();

  let currentList = tabIndex === 0 ? investments : availableAssets;

  currentList = currentList.filter(({ ticker }) =>
    ticker.toLowerCase().includes(assetSearch.toLowerCase()),
  );

  const handleAssetSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAssetSearch(e.target.value);
  };

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
      <AssetsSearchInput
        assetSearch={assetSearch}
        handleAssetSearchChange={handleAssetSearchChange}
      />
      {!currentList.length ? (
        <EmptyList
          message="Não encontramos nenhum ativo."
          subMessage="Por favor, verifique o termo buscado."
        />
      ) : (
        <div className="mx-auto overflow-x-auto max-w-prose">
          <table className="table w-full border border-base-100">
            <thead>
              <tr>
                <th>Ativo</th>
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
      )}
      {desiredAssetPurchase && <AssetPurchaseModal desiredAsset={desiredAssetPurchase} />}
      {desiredAssetSale && <AssetSaleModal desiredAsset={desiredAssetSale} />}
    </>
  );
}
