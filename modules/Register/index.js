// @flow

import BackButton from '../../components/BackButton';
import React from 'react';
import RegisterForm from './components/RegisterForm';

const Register = () => {
  return (
    <div>
      <BackButton color="white" />
      <RegisterForm />
    </div>
  );
};

export default Register;
