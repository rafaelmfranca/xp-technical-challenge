import * as yup from 'yup';

export default function generateWithdrawalSchema(balance: number) {
  return yup.object().shape({
    amount: yup
      .number()
      .typeError('')
      .positive('O valor deve ser positivo')
      .max(balance, 'O valor deve ser menor que o saldo atual')
      .required(),
  });
}
