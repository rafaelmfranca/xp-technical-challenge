import useAccount from '@/hooks/useAccount';
import useAuth from '@/hooks/useAuth';
import generateWithdrawalSchema from '@/schemas/withdrawal';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';
import Input from '../Form/Input';

type WithdrawalFormData = {
  amount: number;
};

export default function WithdrawalModal() {
  const { mutate } = useSWRConfig();
  const { clientId } = useAuth();
  const { handleAddWithdrawal, balance } = useAccount();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<WithdrawalFormData>({
    mode: 'onChange',
    resolver: yupResolver(generateWithdrawalSchema(balance)),
  });

  const handleSubmitWithdrawal: SubmitHandler<WithdrawalFormData> = async (
    data,
  ) => {
    await handleAddWithdrawal({ ...data, type: 'WITHDRAWAL' });
    mutate(`/api/conta/${clientId}`);
    reset();

    // i will fix that
    const modal = document.getElementById('withdrawal-modal') as any;
    modal.checked = false;
  };

  return (
    <>
      <input type="checkbox" id="withdrawal-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="withdrawal-modal"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Insira o valor da retirada</h3>
          <form
            onSubmit={handleSubmit((data) =>
              handleSubmitWithdrawal(data as WithdrawalFormData),
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
              </button>
              <label htmlFor="withdrawal-modal cursor-pointer" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
