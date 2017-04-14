import PropTypes from 'prop-types';
import React from 'react';
import TextField from 'material-ui/TextField';

const RenderRegularTextField = props => {
  const {
    input: { value, ...input },
    label,
    meta: { touched, error },
    ...custom
  } = props;

  return (
    <TextField
      autoComplete={'off'}
      errorText={touched && error}
      fullWidth
      value={label}
      {...input}
      {...custom}
    />
  );
};

RenderRegularTextField.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object
};

export default RenderRegularTextField;
