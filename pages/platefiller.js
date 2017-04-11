import Header from '../modules/Header';
import PlateFiller from '../modules/PlateFiller';
import React from 'react';
import page from '../hocs/page';

export default page(({ url }) => (
  <div>
    <Header title="Plate Filler" />
    <PlateFiller plateId={url.query.id} />
  </div>
));
