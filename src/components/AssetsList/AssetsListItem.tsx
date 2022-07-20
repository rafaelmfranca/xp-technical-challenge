import { formatCurrency } from '@/helpers/formatCurrency';
import useAccount from '@/hooks/useAccount';
import { Asset } from '@/types/shared';
import Image from 'next/image';
import { ArrowDown, ArrowUp } from 'phosphor-react';

type AssetsListItemProps = {
  asset: Asset;
  handleAssetToBuy: (assetId: string) => void;
};

type CustomLoaderProps = {
  src: string;
};

const customLoader = ({ src }: CustomLoaderProps) => {
  return `https://pro.clear.com.br/src/assets/symbols_icons/${src}`;
};

export default function AssetsListItem({ asset, handleAssetToBuy }: AssetsListItemProps) {
  const { balance } = useAccount();

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
        <button
          className="btn btn-success btn-xs"
          disabled={balance < Number(asset.unitPrice)}
          onClick={() => handleAssetToBuy(asset.assetId)}
        >
          <label htmlFor="asset-purchase-modal" className="cursor-pointer">
            Compra
          </label>
        </button>
      </td>
    </tr>
  );
}
