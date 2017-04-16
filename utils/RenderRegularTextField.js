import PropTypes from 'prop-types';
import React from 'react';
import TextField from 'material-ui/TextField';

const RenderRegularTextField = props => {
  const {
    input: { value, ...input },
    label,
    name,
    meta: { touched, error },
    ...custom
  } = props;

  if (custom.id === 'add_plate_name' || custom.id === 'add_plate_description') {
    return (
      <TextField
        autoComplete={'off'}
        errorText={touched && error}
        fullWidth
        hintText={label}
        {...input}
        {...custom}
      />
    );
  } else {
    return (
      <TextField
        autoComplete={'off'}
        errorText={touched && error}
        fullWidth
        defaultValue={label}
        {...input}
        {...custom}
      />
    );
  }
};

RenderRegularTextField.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object,
  name: PropTypes.string
};

export default RenderRegularTextField;
