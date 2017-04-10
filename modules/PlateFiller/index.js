// @flow

import React from 'react';

type Props = {
  query: Object
};

const PlateFiller = ({ url }: Props) => {
  return (
    <div>
      <h1>Plate {url.query.id}</h1>
    </div>
  );
};

export default PlateFiller;
