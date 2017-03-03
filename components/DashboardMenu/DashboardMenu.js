import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import AddPlateDialog from '../AddPlateDialog/AddPlateDialog'
import Block from 'material-ui/svg-icons/content/block'
import {BottomNavigationItem} from 'material-ui/BottomNavigation'
import DoneAll from 'material-ui/svg-icons/action/done-all'
import RaisedButton from 'material-ui/RaisedButton'

type Props = {
  open?: boolean,
  openDialog?: Function,
  closeDialog?: Function
}

export default ({open, openDialog, closeDialog}: Props) => (
  <div className='toolbar'>
    <Toolbar>
      <ToolbarGroup>
        <ToolbarTitle text='Manage Plates' />
      </ToolbarGroup>
      <ToolbarGroup>
        <BottomNavigationItem
          label='Remove All'
          icon={<Block />}
        />
        <BottomNavigationItem
          label='Mark All Complete'
          icon={<DoneAll />}
        />
        <ToolbarSeparator />
        <RaisedButton label='Create Plate' onTouchTap={openDialog} primary />
      </ToolbarGroup>
    </Toolbar>
    <AddPlateDialog
      open={open}
      openDialog={openDialog}
      closeDialog={closeDialog}
    />
  </div>
)
