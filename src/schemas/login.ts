import * as yup from 'yup';

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('O e-mail deve ser válido')
    .required('E-mail é obrigatório'),
  password: yup
    .string()
    .min(8, 'No mínimo 8 caracteres')
    .required('Senha é obrigatória'),
});

export default signInFormSchema;
