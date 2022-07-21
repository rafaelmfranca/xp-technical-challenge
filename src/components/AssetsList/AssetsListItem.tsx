import { formatCurrency } from '@/helpers/formatCurrency';
import { useAssets } from '@/hooks';
import useAccount from '@/hooks/useAccount';
import { Asset } from '@/types/shared';
import Image from 'next/image';
import { ArrowDown, ArrowUp } from 'phosphor-react';

type AssetsListItemProps = {
  asset: Asset;
  handleDesiredAssetPurchase: (assetId: string) => void;
  handleDesiredAssetSale: (assetId: string) => void;
};

type CustomLoaderProps = {
  src: string;
};

const customLoader = ({ src }: CustomLoaderProps) => {
  return `https://pro.clear.com.br/src/assets/symbols_icons/${src}`;
};

export default function AssetsListItem({
  asset,
  handleDesiredAssetPurchase,
  handleDesiredAssetSale,
}: AssetsListItemProps) {
  const { balance } = useAccount();
  const { investments, availableAssets } = useAssets();

  return (
    <tr key={asset.ticker}>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-5 h-5 sm:w-6 sm:h-6 mask mask-squircle">
              <Image
                loader={customLoader}
                src={`${asset.ticker.slice(0, 4)}.png`}
                width={24}
                height={24}
                alt={`Ativo ${asset.ticker}`}
              />
            </div>
          </div>
          <div className="text-sm font-medium">
            <div className="font-medium">{asset.ticker}</div>
            <div>
              {Number(asset.variation) > 0 ? (
                <div className="flex items-center gap-1 text-success">
                  <ArrowUp size={12} />
                  {Number(asset.variation).toFixed(2)}
                </div>
              ) : (
                <div className="flex items-center gap-1 text-error">
                  <ArrowDown size={12} />
                  {Number(asset.variation).toFixed(2)}
                </div>
              )}
            </div>
          </div>
        </div>
      </td>
      <td>
        <span className="font-medium badge badge-ghost badge-md">{asset.amount}</span>
      </td>
      <td>
        <span className="font-medium badge badge-ghost badge-md">
          {formatCurrency(Number(asset.unitPrice))}
        </span>
      </td>
      <td className="sm:p-0">
        <div className="flex justify-center gap-1">
          <label
            htmlFor="asset-purchase-modal"
            onClick={() => handleDesiredAssetPurchase(asset.assetId)}
            className={`btn btn-success btn-xs ${
              balance < Number(asset.unitPrice) ||
              (!availableAssets.some(({ assetId }) => assetId === asset.assetId) && 'btn-disabled')
            }`}
            role="button"
          >
            C
          </label>

          <label
            htmlFor="asset-sale-modal"
            className={`btn btn-error btn-xs ${
              !investments.some(({ assetId }) => assetId === asset.assetId) && 'btn-disabled'
            }`}
            onClick={() => handleDesiredAssetSale(asset.assetId)}
            role="button"
          >
            V
          </label>
        </div>
      </td>
    </tr>
  );
}
