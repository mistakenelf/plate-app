export default values => {
  const errors = {}
  if (!values.currentPlateName) {
    errors.currentPlateName = 'Please enter a plate name'
  }
  if (!values.currentPlateDescription) {
    errors.currentPlateDescription = 'Please enter a plate description'
  }
  return errors
}
