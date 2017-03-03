import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'

import Add from 'material-ui/svg-icons/content/add'
import AddPlateDialog from '../AddPlateDialog/AddPlateDialog'
import Block from 'material-ui/svg-icons/content/block'
import DoneAll from 'material-ui/svg-icons/action/done-all'
import Paper from 'material-ui/Paper'

type Props = {
  open?: boolean,
  openDialog?: Function,
  closeDialog?: Function
}

export default ({open, openDialog, closeDialog}: Props) => (
  <Paper zDepth={1}>
    <BottomNavigation>
      <BottomNavigationItem
        label='Remove All'
        icon={<Block />}
      />
      <BottomNavigationItem
        label='Mark All Complete'
        icon={<DoneAll />}
      />
      <BottomNavigationItem
        label='Add Plate'
        icon={<Add />}
        onTouchTap={openDialog}
      />
    </BottomNavigation>
    <AddPlateDialog
      open={open}
      openDialog={openDialog}
      closeDialog={closeDialog}
    />
  </Paper>
)
