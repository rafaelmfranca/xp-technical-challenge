import * as yup from 'yup';

export default function generateAssetSaleSchema(amount: number) {
  return yup.object().shape({
    amount: yup
      .number()
      .typeError('')
      .integer('A quantidade deve ser um número inteiro')
      .positive('A quantidade deve ser positiva')
      .max(amount, 'Quantidade indisponível para venda')
      .required(),
  });
}
