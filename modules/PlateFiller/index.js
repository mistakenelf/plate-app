import React, { PropTypes } from 'react';

const PlateFiller = props => {
  return (
    <div>
      <h1>Plate {props.url.query.id}</h1>
    </div>
  );
};

PlateFiller.propTypes = {
  url: PropTypes.object
};

export default PlateFiller;
