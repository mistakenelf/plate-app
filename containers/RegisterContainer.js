import BackButton from '../components/BackButton/BackButton';
import React from 'react';
import RegisterForm from '../components/Register/RegisterForm';

const RegisterContainer = () => {
  return (
    <div>
      <BackButton color="white" />
      <RegisterForm />
    </div>
  );
};

export default RegisterContainer;
