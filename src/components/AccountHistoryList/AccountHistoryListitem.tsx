import { AccountHistory } from '@/types/shared';
import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react';

export default function AccountHistoryListitem({
  type,
  amount,
  createdAt,
}: Pick<AccountHistory, 'amount' | 'type' | 'createdAt'>) {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          {type === 'DEPOSIT' ? (
            <ArrowCircleUp size={24} className="text-success" role="img" />
          ) : (
            <ArrowCircleDown size={24} className="text-error" role="img" />
          )}
        </div>
      </td>
      <td>
        <span className="font-medium">
          {Number(amount).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
        <br />
        <span className="badge badge-ghost badge-sm">
          {type === 'DEPOSIT' ? 'Depósito' : 'Retirada'}
        </span>
      </td>
      <td>
        <span className="text-sm">
          {format(new Date(createdAt), "dd 'de' MMMM", { locale: ptBr })}
        </span>
      </td>
    </tr>
  );
}
