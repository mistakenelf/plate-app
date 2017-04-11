// @flow

import BackButton from '../../components/BackButton';
import LoginForm from './components/LoginForm';
import React from 'react';

const Login = () => {
  return (
    <div>
      <BackButton color="white" />
      <LoginForm />
    </div>
  );
};

export default Login;
