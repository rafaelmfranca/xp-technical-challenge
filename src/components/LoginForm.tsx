import useAuth from '@/hooks/useAuth';
import loginFormSchema from '@/schemas/login';
import { Button, ErrorToast, Input } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginFormData>({
    mode: 'onChange',
    resolver: yupResolver(loginFormSchema),
  });

  const { handleLogin, error } = useAuth();

  const handleSignIn: SubmitHandler<LoginFormData> = async (data) => {
    await handleLogin(data);
  };

  return (
    <form
      onSubmit={handleSubmit(
        (data) => handleSignIn(data as LoginFormData), // https://github.com/react-hook-form/react-hook-form/issues/6523
      )}
    >
      <Input
        {...register('email')}
        name="email"
        type="email"
        label="E-mail"
        placeholder="cliente@xp.com"
        data-testid="email-input"
        autoComplete="email"
        error={errors.email}
      />
      <Input
        {...register('password')}
        name="password"
        type="password"
        label="Senha"
        placeholder="********"
        data-testid="password-input"
        autoComplete="current-password"
        error={errors.password}
      />
      <Button label="Acessar" isSubmitting={isSubmitting} isValid={isValid} />
      {error && <ErrorToast message={error} />}
    </form>
  );
}
