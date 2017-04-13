import ForgotPasswordContainer from '../containers/ForgotPasswordContainer';
import Header from '../components/Header/Header';
import React from 'react';
import { pageWithNavlessLayout } from '../hocs/page';

export default pageWithNavlessLayout(() => (
  <div>
    <Header title="Forgot Password" />
    <ForgotPasswordContainer />
  </div>
));
