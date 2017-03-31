import Header from '../modules/Header';
import NavlessLayout from '../modules/NavlessLayout';
import React from 'react';
import Register from '../modules/Register';
import withData from '../lib/withData';

export default withData(() => (
  <NavlessLayout>
    <Header title="Register" />
    <Register />
  </NavlessLayout>
));
