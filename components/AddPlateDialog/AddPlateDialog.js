import Dialog from 'material-ui/Dialog'

export default ({ open, openDialog, closeDialog }) => (
  <Dialog
    title='Add A New Plate'
    modal={false}
    open={open}
    onRequestClose={closeDialog}
  >
    This will be how you add a new plate
  </Dialog>
)
