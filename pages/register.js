// @flow

import Header from '../modules/Header';
import React from 'react';
import Register from '../modules/Register';
import { pageWithNavlessLayout } from '../hocs/page';

export default pageWithNavlessLayout(() => (
  <div>
    <Header title="Register" />
    <Register />
  </div>
));
