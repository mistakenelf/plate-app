import Account from '../modules/Account';
import Header from '../modules/Header';
import React from 'react';
import page from '../hocs/page';

export default page(() => (
  <div>
    <Header title="Account" />
    <Account />
  </div>
));
