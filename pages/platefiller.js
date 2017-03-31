import DefaultLayout from '../modules/DefaultLayout';
import Header from '../modules/Header';
import PlateFiller from '../modules/PlateFiller';
import React from 'react';
import withData from '../lib/withData';

export default withData(props => (
  <DefaultLayout>
    <Header title="Plate Filler" />
    <PlateFiller {...props} />
  </DefaultLayout>
));
