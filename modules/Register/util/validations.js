// @flow

export const registerValidations = (values: Object) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Please enter your first name';
  }
  if (!values.lastName) {
    errors.lastName = 'Please enter your last name';
  }
  if (!values.username) {
    errors.username = 'Please enter a username';
  }
  if (!values.password) {
    errors.password = 'Please enter a password';
  }
  return errors;
};
