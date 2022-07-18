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
      <div className="p-2 shadow-md card bg-base-100">
        <div className="stat">
          <div className="stat-title">Saldo em conta</div>
          <div className="stat-value">
            {balance.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </div>
          <div className="stat-desc">Atualizado em {date}</div>
        </div>
        <div className="flex justify-between p-4">
          <button className="btn btn-sm btn-success modal-button">
            <label htmlFor="deposit-modal" className="cursor-pointer">
              Depósito
            </label>
          </button>
          <button
            className="btn btn-sm btn-error modal-button"
            disabled={balance === 0}
          >
            <label htmlFor="withdrawal-modal" className="cursor-pointer">
              Retirada
            </label>
          </button>
        </div>
      </div>
    </div>
  );
}
