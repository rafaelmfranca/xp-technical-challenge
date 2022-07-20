import { formatCurrency } from '@/helpers/formatCurrency';
import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

type BalanceProps = {
  balance: number;
};

export default function Balance({ balance }: BalanceProps) {
  const date = format(new Date(), "dd 'de' MMMM', às ' HH:mm'h'", {
    locale: ptBr,
  });

  return (
    <div className="flex items-center justify-center p-4">
      <div className="p-2 border border-base-300 card bg-base-100">
        <div className="stat">
          <div className="stat-title">Saldo em conta</div>
          <div className="stat-value">{formatCurrency(balance)}</div>
          <div className="stat-desc">Atualizado em {date}</div>
        </div>
        <div className="flex justify-between p-4">
          <label
            htmlFor="deposit-modal"
            className="btn btn-sm btn-success modal-button"
            role="button"
          >
            Depósito
          </label>
          <label
            htmlFor="withdrawal-modal"
            className={`btn btn-sm btn-error modal-button ${balance === 0 && 'btn-disabled'}`}
            role="button"
          >
            Retirada
          </label>
        </div>
      </div>
    </div>
  );
}
