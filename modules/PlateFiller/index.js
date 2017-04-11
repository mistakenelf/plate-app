// @flow

import React from 'react';

type Props = {
  plateId: string
};

const PlateFiller = ({ plateId }: Props) => {
  return (
    <div>
      <h1>Plate {plateId}</h1>
    </div>
  );
};

export default PlateFiller;
