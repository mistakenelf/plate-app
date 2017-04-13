import BackButton from '../components/BackButton/BackButton';
import ForgotPasswordForm
  from '../components/ForgotPassword/ForgotPasswordForm';
import React from 'react';

const ForgotPasswordContainer = () => {
  return (
    <div>
      <BackButton color="white" />
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordContainer;
