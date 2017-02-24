import Add from 'material-ui/svg-icons/content/add'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import { fullWhite } from 'material-ui/styles/colors'

export default ({ open, openDialog, closeDialog }) => (
  <div>
    <RaisedButton
      backgroundColor='#a4c639'
      icon={<Add color={fullWhite} />}
      label='Add Plate'
      labelStyle={{ color: 'white', verticalAlign: 'middle' }}
      fullWidth
      onTouchTap={openDialog}
    />
    <Dialog
      title="Dialog With Actions"
      modal={false}
      open={open}
      onRequestClose={closeDialog}
    >
      Test Dialog
    </Dialog>
  </div>
)
