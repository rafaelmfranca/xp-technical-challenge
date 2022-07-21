import { formatCurrency } from '@/helpers/formatCurrency';
import { useAccount } from '@/hooks';

type OrderPreviewProps = {
  isValid: boolean;
  unitPrice: number;
  amount: number;
};

export default function OrderPreview({ isValid, unitPrice, amount }: OrderPreviewProps) {
  const { balance } = useAccount();

  return (
    <div className="flex items-center justify-between w-full p-2 mb-4 text-xs">
      <div className="flex flex-col items-center">
        <p>Saldo disponível</p>
        <p className="border badge badge-md badge-ghost border-base-300">
          {formatCurrency(balance)}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p>Valor da ordem</p>
        <p className="border badge badge-md badge-ghost border-base-300">
          {formatCurrency(isValid ? unitPrice * amount : 0)}
        </p>
      </div>
    </div>
  );
}
