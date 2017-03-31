export const registerValidations = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Please enter an email';
  }
  if (!values.password) {
    errors.password = 'Please enter a password';
  } else if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
