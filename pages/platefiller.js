import Header from '../modules/Header';
import PlateFiller from '../modules/PlateFiller';
import React from 'react';
import page from '../hocs/page';

export default page(props => (
  <div>
    <Header title="Plate Filler" />
    <PlateFiller {...props} />
  </div>
));
