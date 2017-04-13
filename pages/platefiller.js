import Header from '../components/Header/Header';
import PlateFillerContainer from '../containers/PlateFillerContainer';
import React from 'react';
import page from '../hocs/page';

export default page(({ url }) => (
  <div>
    <Header title="Plate Filler" />
    <PlateFillerContainer plateId={url.query.id} />
  </div>
));
