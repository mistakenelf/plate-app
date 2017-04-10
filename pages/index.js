// @flow

import Header from '../modules/Header';
import Home from '../modules/Home';
import React from 'react';
import page from '../hocs/page';

export default page(() => (
  <div>
    <Header title="Home" />
    <Home />
  </div>
));
