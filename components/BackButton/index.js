import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';
import React from 'react';

const BackButton = ({ color }) => {
  return (
    <div>
      <a onClick={() => window.history.back()}>
        <IconButton
          iconStyle={{ color: color }}
          tooltip="Back"
          tooltipPosition="bottom-center"
        >
          <BackArrow />
        </IconButton>
      </a>
    </div>
  );
};

BackButton.propTypes = {
  color: PropTypes.string
};

export default BackButton;
