// @flow

import Header from '../modules/Header';
import Login from '../modules/Login';
import React from 'react';
import { pageWithNavlessLayout } from '../hocs/page';

export default pageWithNavlessLayout(() => (
  <div>
    <Header title="Login" />
    <Login />
  </div>
));
