// @flow

import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';
import React from 'react';

type Props = {
  color: string
};

const BackButton = ({ color }: Props) => {
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

export default BackButton;
