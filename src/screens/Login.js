import React from 'react';
import {AuthWrapper} from '../containers';
import {LoginForm} from '../components';

export function Login() {
  return (
    <AuthWrapper
      subTitle={'Welcome Back, Login with your phone number'}
      title={'Login'}>
      <LoginForm />
    </AuthWrapper>
  );
}
