// @flow

import Header from '../modules/Header';
import PlateFiller from '../modules/PlateFiller';
import React from 'react';
import page from '../hocs/page';

type Props = {
  url: Object
};

export default page(({ url }: Props) => (
  <div>
    <Header title="Plate Filler" />
    <PlateFiller plateId={url.query.id} />
  </div>
));
