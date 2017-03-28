import React, { PropTypes } from "react";

import TextField from "material-ui/TextField";

const RenderTextField = props => {
  const { input, label, meta: { touched, error }, ...custom } = props;

  return (
    <TextField
      hintText={label}
      autoComplete={"off"}
      errorText={touched && error}
      fullWidth
      {...input}
      {...custom}
    />
  );
};

RenderTextField.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object
};

export default RenderTextField;
