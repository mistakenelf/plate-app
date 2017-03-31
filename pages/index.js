import DefaultLayout from '../modules/DefaultLayout';
import Header from '../modules/Header';
import Home from '../modules/Home';
import React from 'react';
import withData from '../lib/withData';

export default withData(() => (
  <DefaultLayout>
    <Header title="Home" />
    <Home />
  </DefaultLayout>
));
