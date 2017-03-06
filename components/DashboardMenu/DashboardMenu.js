// @flow

import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
} from 'material-ui/Toolbar';

import AddPlateDialog from '../AddPlateDialog/AddPlateDialog';
import Block from 'material-ui/svg-icons/content/block';
import Divider from 'material-ui/Divider';
import DoneAll from 'material-ui/svg-icons/action/done-all';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationExpandMoreIcon
  from 'material-ui/svg-icons/navigation/expand-more';
import RaisedButton from 'material-ui/RaisedButton';
import RemovePlatesDialog from '../RemovePlatesDialog/RemovePlatesDialog';

type Props = {
  isNewPlateDialogOpen?: boolean,
  openNewPlateDialog?: Function,
  closeNewPlateDialog?: Function,
  isRemovePlatesDialogOpen?: boolean,
  openRemovePlatesDialog?: Function,
  closeRemovePlatesDialog?: Function
};

export default ({ isNewPlateDialogOpen, openNewPlateDialog, closeNewPlateDialog, isRemovePlatesDialogOpen, openRemovePlatesDialog, closeRemovePlatesDialog }: Props) => (
  <div>
    <div className="toolbar-desktop">
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Manage Plates" />
        </ToolbarGroup>
        <ToolbarGroup>
          <IconButton tooltip="Remove all plates" onTouchTap={openRemovePlatesDialog}>
            <Block />
          </IconButton>
          <IconButton tooltip="Mark all plates as done">
            <DoneAll />
          </IconButton>
          <ToolbarSeparator />
          <RaisedButton primary label="Create Plate" onTouchTap={openNewPlateDialog} />
        </ToolbarGroup>
      </Toolbar>
    </div>
    <div className="toolbar-mobile">
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Manage Plates" />
        </ToolbarGroup>
        <ToolbarGroup>
          <IconMenu
            iconButtonElement={
              <IconButton touch>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Create Plate" onTouchTap={openNewPlateDialog} />
            <Divider />
            <MenuItem primaryText="Mark All Complete" />
            <Divider />
            <MenuItem primaryText="Remove All" onTouchTap={openRemovePlatesDialog} />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    </div>
    <AddPlateDialog
      open={isNewPlateDialogOpen}
      openDialog={openNewPlateDialog}
      closeDialog={closeNewPlateDialog}
    />
    <RemovePlatesDialog
      open={isRemovePlatesDialogOpen}
      openDialog={openRemovePlatesDialog}
      closeDialog={closeRemovePlatesDialog}
    />
    <style jsx>
      {
        `
      @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 600px) {
          .toolbar-desktop {
            display: none;
          }
        }
      @media only screen
        and (min-device-width : 601px)
        and (max-device-width : 2600px) {
          .toolbar-mobile {
            display: none;
          }
        }
    `
      }
    </style>
  </div>
);
