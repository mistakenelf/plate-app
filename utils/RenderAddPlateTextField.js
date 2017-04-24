import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'

const RenderAddPlateTextField = props => {
  const { input, label, meta: { touched, error }, ...custom } = props
  return (
    <TextField
      hintText={label}
      autoComplete={'off'}
      errorText={touched && error}
      fullWidth
      {...input}
      {...custom}
    />
  )
}

RenderAddPlateTextField.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object
}

export default RenderAddPlateTextField
