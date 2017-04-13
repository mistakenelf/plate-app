import PropTypes from 'prop-types';
import React from 'react';
import TextEditor from '../TextEditor/TextEditor';

const PlateFiller = ({ plateId }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-sm-12 col-md-12 col-lg-12"
          style={{ width: '100%' }}
        >
          <h1>Plate</h1>
          <div>{plateId}</div>
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
