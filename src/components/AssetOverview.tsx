import { formatCurrency } from '@/helpers/formatCurrency';
import { Asset } from '@/types/shared';
import Image from 'next/image';
import { ArrowDown, ArrowUp } from 'phosphor-react';

type AssetOverviewProps = {
  asset: Asset;
};

type CustomLoaderProps = {
  src: string;
};

const customLoader = ({ src }: CustomLoaderProps) => {
  return `https://pro.clear.com.br/src/assets/symbols_icons/${src}`;
};

export default function AssetOverview({ asset }: AssetOverviewProps) {
  return (
    <div className="flex items-center justify-around py-2 rounded-2xl bg-base-200">
      <div className="w-7 h-7 mask mask-squircle">
        <Image
          loader={customLoader}
          src={`${asset.ticker.slice(0, 4)}.png`}
          width={28}
          height={28}
          alt={`Ativo ${asset.ticker}`}
        />
      </div>
      <div className="text-sm font-medium">
        <div className="font-medium">{asset.ticker}</div>
        <div>
          {Number(asset.variation) > 0 ? (
            <div className="flex items-center gap-1 text-success">
              <ArrowUp size={12} role="img" alt="Seta para cima" />
              {Number(asset.variation).toFixed(2)}
            </div>
          ) : (
            <div className="flex items-center gap-1 text-error">
              <ArrowDown size={12} role="img" alt="Seta para baixo" />
              {Number(asset.variation).toFixed(2)}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center font-medium">
        <span className="text-sm">Valor</span>
        <span className="badge badge-md">
          {formatCurrency(Number(asset.unitPrice))}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center font-medium">
        <span className="text-sm">Qtde. disponível</span>
        <span className="badge badge-md">{asset.amount}</span>
      </div>
    </div>
  );
}
