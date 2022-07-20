import * as yup from 'yup';

const depositSchema = yup.object().shape({
  amount: yup.number().typeError('').positive('O valor deve ser positivo').required(),
});

export default depositSchema;
