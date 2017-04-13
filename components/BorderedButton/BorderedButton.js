import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import React from 'react';

const BorderedButton = ({ type, label, color }) => {
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

BorderedButton.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string
};

export default BorderedButton;
