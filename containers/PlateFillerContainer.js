import PlateFiller from '../components/PlateFiller/PlateFiller';
import PropTypes from 'prop-types';
import React from 'react';

const PlateFillerContainer = ({ plateId }) => {
  return <PlateFiller plateId={plateId} />;
};

PlateFillerContainer.propTypes = {
  plateId: PropTypes.string
};

export default PlateFillerContainer;
