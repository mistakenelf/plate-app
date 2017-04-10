// @flow

import React from 'react';
import TextField from 'material-ui/TextField';

type Props = {
  label: string,
  meta: Object,
  input: Object
};

const RenderTextField = (props: Props) => {
  const { input, label, meta: { touched, error }, ...custom } = props;
  return (
    <TextField
      hintText={label}
      autoComplete={'off'}
      errorText={touched && error}
      fullWidth
      {...input}
      {...custom}
    />
  );
};

export default RenderTextField;
