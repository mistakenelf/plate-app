import React, { PropTypes } from "react";

import FlatButton from "material-ui/FlatButton";

const BorderedButton = props => {
  return (
    <div className="bordered-button">
      <FlatButton
        type={props.type}
        label={props.label}
        labelStyle={{ color: "white", width: "100%" }}
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
};

BorderedButton.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string
};

export default BorderedButton;
