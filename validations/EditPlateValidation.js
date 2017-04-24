export default values => {
  const errors = {}
  if (!values.currentPlateName === undefined) {
    errors.currentPlateName = 'Please enter a plate name'
  }
  if (!values.currentPlateDescription === undefined) {
    errors.currentPlateDescription = 'Please enter a plate description'
  }
  return errors
}
