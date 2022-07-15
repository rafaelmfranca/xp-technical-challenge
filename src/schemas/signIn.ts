import * as yup from 'yup';

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be valid')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'At least 8 characters')
    .required('Password is required'),
});

export default signInFormSchema;
