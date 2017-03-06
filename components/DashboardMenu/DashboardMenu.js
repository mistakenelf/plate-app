// @flow

import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
} from 'material-ui/Toolbar';

import AddPlateDialog from '../AddPlateDialog/AddPlateDialog';
import Block from 'material-ui/svg-icons/content/block';
import DoneAll from 'material-ui/svg-icons/action/done-all';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationExpandMoreIcon
  from 'material-ui/svg-icons/navigation/expand-more';
import RaisedButton from 'material-ui/RaisedButton';

type Props = {
  open?: boolean,
  openDialog?: Function,
  closeDialog?: Function
};

export default ({ open, openDialog, closeDialog }: Props) => (
  <div>
    <div className="toolbar-desktop">
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Manage Plates" />
        </ToolbarGroup>
        <ToolbarGroup>
          <IconButton tooltip="Remove all plates">
            <Block />
          </IconButton>
          <IconButton tooltip="Mark all plates as done">
            <DoneAll />
          </IconButton>
          <ToolbarSeparator />
          <RaisedButton primary label="Create Plate" onTouchTap={openDialog} />
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
            <MenuItem primaryText="Create Plate" />
            <MenuItem primaryText="Mark All Complete" />
            <MenuItem primaryText="Remove All" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    </div>
    <AddPlateDialog
      open={open}
      openDialog={openDialog}
      closeDialog={closeDialog}
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
