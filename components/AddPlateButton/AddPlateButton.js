// @flow

import Add from 'material-ui/svg-icons/content/add'
import AddPlateDialog from '../AddPlateDialog/AddPlateDialog'
import RaisedButton from 'material-ui/RaisedButton'
import { fullWhite } from 'material-ui/styles/colors'

type Props = {
  open?: boolean,
  openDialog?: Function,
  closeDialog?: Function
}

export default ({ open, openDialog, closeDialog }: Props) => (
  <div>
    <RaisedButton
      backgroundColor='#a4c639'
      icon={<Add color={fullWhite} />}
      label='Add Plate'
      labelStyle={{ color: 'white', verticalAlign: 'middle' }}
      fullWidth
      onTouchTap={openDialog}
    />
    <AddPlateDialog
      open={open}
      openDialog={openDialog}
      closeDialog={closeDialog}
    />
  </div>
)
