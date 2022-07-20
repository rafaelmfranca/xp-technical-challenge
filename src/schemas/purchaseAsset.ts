import * as yup from 'yup';

export default function generateAssetPurchaseSchema(
  balance: number,
  amount: number,
  unitPrice: number,
) {
  const purchasingPower = Math.floor(balance / unitPrice);
  const maxQuantity = purchasingPower > amount ? amount : purchasingPower;

  return yup.object().shape({
    amount: yup
      .number()
      .typeError('')
      .integer('A quantidade deve ser um número inteiro')
      .positive('A quantidade deve ser positiva')
      .max(maxQuantity, 'Saldo ou quantidade insuficiente')
      .required(),
  });
}
