import React from 'react';
import { useCredentialStore } from 'stores/useCredentialStore';
import { LoginProps } from './Login.props';
import LoginView from './Login.view';

const LoginContainer = (props: LoginProps) => {
  const { login } = useCredentialStore((state) => state);
  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await login(email, password);
  };
  return <LoginView onSubmit={onSubmit} />;
};

export default LoginContainer;
