import React, { PropTypes } from 'react';

import FlatButton from 'material-ui/FlatButton';

const BorderedButton = props => {
  return (
    <div
      className="bordered-button"
      style={{ border: `1px solid ${props.color}` }}
    >
      <FlatButton
        type={props.type}
        label={props.label}
        labelStyle={{ color: props.color, width: '100%' }}
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

BorderedButton.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string
};

BorderedButton.defaultProps = {
  color: 'white'
};

export default BorderedButton;
