import useAccount from '@/hooks/useAccount';
import useAuth from '@/hooks/useAuth';
import depositSchema from '@/schemas/deposit';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';
import Input from '../Form/Input';

type DepositFormData = {
  amount: number;
};

export default function DepositModal() {
  const { mutate } = useSWRConfig();
  const { clientId } = useAuth();
  const { handleAddDeposit } = useAccount();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitting, isValid },
  } = useForm<DepositFormData>({
    mode: 'onChange',
    resolver: yupResolver(depositSchema),
    defaultValues: {
      amount: 0,
    },
  });

  const handleSubmitDeposit: SubmitHandler<DepositFormData> = async (data) => {
    await handleAddDeposit({ ...data, type: 'DEPOSIT' });
    mutate(`/api/conta/${clientId}`);
    resetField('amount');

    // i will fix that
    const modal = document.getElementById('deposit-modal') as any;
    modal.checked = false;
  };

  return (
    <>
      <input type="checkbox" id="deposit-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="deposit-modal"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Insira o valor do depósito</h3>
          <form
            onSubmit={handleSubmit((data) =>
              handleSubmitDeposit(data as DepositFormData),
            )}
          >
            <div className="py-4">
              <Input
                {...register('amount')}
                name="amount"
                type="number"
                label="Valor"
                step=".01"
                error={errors.amount}
              />
            </div>
            <div className="mt-0 modal-action">
              <button
                type="submit"
                className={`btn btn-primary ${isSubmitting && 'loading'}`}
                disabled={!isValid}
              >
                Confirmar
                <label htmlFor="deposit-modal" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
