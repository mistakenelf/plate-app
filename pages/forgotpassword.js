import ForgotPassword from '../modules/ForgotPassword';
import Header from '../modules/Header';
import React from 'react';
import { pageWithNavlessLayout } from '../hocs/page';

export default pageWithNavlessLayout(() => (
  <div>
    <Header title="Forgot Password" />
    <ForgotPassword />
  </div>
));
