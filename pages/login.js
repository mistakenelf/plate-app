import Header from '../modules/Header';
import Login from '../modules/Login';
import NavlessLayout from '../modules/NavlessLayout';
import React from 'react';
import withData from '../lib/withData';

export default withData(() => (
  <NavlessLayout>
    <Header title="Login" />
    <Login />
  </NavlessLayout>
));
