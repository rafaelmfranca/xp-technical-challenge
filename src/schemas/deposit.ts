import * as yup from 'yup';

const depositSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError('')
    .positive('O valor deve ser positivo')
    .max(1000000, 'Valor máximo por transação é R$1.000.000')
    .required(),
});

export default depositSchema;
