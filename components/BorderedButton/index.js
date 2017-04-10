// @flow

import FlatButton from 'material-ui/FlatButton';
import React from 'react';

type Props = {
  type: string,
  label: string,
  color: string
};

const BorderedButton = ({ type, label, color }: Props) => {
  return (
    <div className="bordered-button" style={{ border: `1px solid ${color}` }}>
      <FlatButton
        type={type}
        label={label}
        labelStyle={{ color: color, width: '100%' }}
      />
      <style jsx>
        {
          `
          .bordered-button {
            border-radius: 4px;
            display: inline-block;
          }
          `
        }
      </style>
    </div>
  );
};

export default BorderedButton;
