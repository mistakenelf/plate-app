// @flow

import Header from '../modules/Header';
import PlateFiller from '../modules/PlateFiller';
import React from 'react';
import page from '../hocs/page';

type Props = {
  props: Object
};

export default page((props: Props) => (
  <div>
    <Header title="Plate Filler" />
    <PlateFiller {...props} />
  </div>
));
