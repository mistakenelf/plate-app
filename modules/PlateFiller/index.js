// @flow

import React from 'react';
import TextEditor from '../../components/TextEditor';

type Props = {
  plateId: string
};

const PlateFiller = ({ plateId }: Props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h1>Plate {plateId}</h1>
          <hr style={{ marginBottom: 10 }} />
          <TextEditor />
        </div>
      </div>
    </div>
  );
};

export default PlateFiller;
