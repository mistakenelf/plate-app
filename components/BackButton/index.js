import React, { PropTypes } from 'react';

import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';

const BackButton = props => {
  return (
    <div>
      <a onClick={() => window.history.back()}>
        <IconButton
          iconStyle={{ color: props.buttonColor }}
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
  buttonColor: PropTypes.string
};

BackButton.defaultProps = {
  buttonColor: 'white'
};

export default BackButton;
