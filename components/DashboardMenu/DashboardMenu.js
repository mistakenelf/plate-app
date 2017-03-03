// @flow

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'

import AddPlateDialog from '../AddPlateDialog/AddPlateDialog'
import Block from 'material-ui/svg-icons/content/block'
import DoneAll from 'material-ui/svg-icons/action/done-all'
import IconButton from 'material-ui/IconButton'
import RaisedButton from 'material-ui/RaisedButton'

type Props = {
  open?: boolean,
  openDialog?: Function,
  closeDialog?: Function
}

export default ({ open, openDialog, closeDialog }: Props) => (
  <div className='toolbar'>
    <Toolbar>
      <ToolbarGroup>
        <ToolbarTitle text='Manage Plates' />
      </ToolbarGroup>
      <ToolbarGroup>
        <IconButton tooltip='Remove all plates'>
          <Block />
        </IconButton>
        <IconButton tooltip='Mark all plates as done'>
          <DoneAll />
        </IconButton>
        <ToolbarSeparator />
        <RaisedButton
          primary
          label='Create Plate'
          onTouchTap={openDialog}
        />
      </ToolbarGroup>
    </Toolbar>
    <AddPlateDialog
      open={open}
      openDialog={openDialog}
      closeDialog={closeDialog}
    />
  </div>
)
