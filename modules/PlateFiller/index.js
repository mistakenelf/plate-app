import PropTypes from 'prop-types';
import React from 'react';
import TextEditor from '../../components/TextEditor';

const PlateFiller = ({ plateId }) => {
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

PlateFiller.propTypes = {
  plateId: PropTypes.string
};

export default PlateFiller;
