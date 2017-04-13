import Header from '../components/Header/Header';
import LoginContainer from '../containers/LoginContainer';
import React from 'react';
import { pageWithNavlessLayout } from '../hocs/page';

export default pageWithNavlessLayout(() => (
  <div>
    <Header title="Login" />
    <LoginContainer />
  </div>
));
