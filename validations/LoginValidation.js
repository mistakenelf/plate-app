export default values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Please enter a username'
  }
  if (!values.password) {
    errors.password = 'Please enter a password'
  }
  return errors
}
