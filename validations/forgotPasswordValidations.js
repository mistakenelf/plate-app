export const forgotPasswordValidations = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Please enter an email'
  } else if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}
