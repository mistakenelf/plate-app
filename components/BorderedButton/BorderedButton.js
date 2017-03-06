// @flow

import FlatButton from 'material-ui/FlatButton';
import React from 'react';

type Props = {
  type?: string,
  label?: string,
};

export default ({ type, label }: Props) => (
  <div className="bordered-button">
    <FlatButton
      type={type}
      label={label}
      labelStyle={{ color: 'white', width: '100%' }}
    />
    <style jsx>
      {
        `
      .bordered-button {
        border: 1px solid white;
        border-radius: 4px;
        display: inline-block;
      }
    `
      }
    </style>
  </div>
);
