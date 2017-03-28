export const profileValidations = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Please enter your first name";
  }
  return errors;
};
