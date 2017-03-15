import React, { PropTypes } from "react";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
} from "material-ui/Toolbar";

import AddPlateDialog from "../AddPlateDialog/AddPlateDialog";
import Block from "material-ui/svg-icons/content/block";
import DashBoardSearch from "../DashboardSearch/DashboardSearch";
import Divider from "material-ui/Divider";
import DoneAll from "material-ui/svg-icons/action/done-all";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import NavigationExpandMoreIcon
  from "material-ui/svg-icons/navigation/expand-more";
import RaisedButton from "material-ui/RaisedButton";
import RemovePlatesDialog from "../RemovePlatesDialog/RemovePlatesDialog";

const propTypes = {
  newPlateDialogOpen: PropTypes.bool,
  openNewPlateDialog: PropTypes.func,
  closeNewPlateDialog: PropTypes.func,
  removePlatesDialogOpen: PropTypes.bool,
  openRemovePlatesDialog: PropTypes.func,
  closeRemovePlatesDialog: PropTypes.func,
  addPlate: PropTypes.func
};

const DashboardMenu = (
  {
    newPlateDialogOpen,
    openNewPlateDialog,
    closeNewPlateDialog,
    removePlatesDialogOpen,
    openRemovePlatesDialog,
    closeRemovePlatesDialog,
    addPlate
  }
) => (
  <div>
    <div className="toolbar-desktop">
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Manage Plates" />
        </ToolbarGroup>
        <ToolbarGroup>
          <DashBoardSearch />
        </ToolbarGroup>
        <ToolbarGroup>
          <IconButton
            tooltip="Remove all plates"
            onTouchTap={openRemovePlatesDialog}
          >
            <Block />
          </IconButton>
          <IconButton tooltip="Mark all plates as done">
            <DoneAll />
          </IconButton>
          <ToolbarSeparator />
          <RaisedButton
            primary
            label="Create Plate"
            onTouchTap={openNewPlateDialog}
          />
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
            <MenuItem
              primaryText="Create Plate"
              onTouchTap={openNewPlateDialog}
            />
            <Divider />
            <MenuItem primaryText="Mark All Complete" />
            <Divider />
            <MenuItem
              primaryText="Remove All"
              onTouchTap={openRemovePlatesDialog}
            />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    </div>
    <AddPlateDialog
      open={newPlateDialogOpen}
      openDialog={openNewPlateDialog}
      closeDialog={closeNewPlateDialog}
      addPlate={addPlate}
    />
    <RemovePlatesDialog
      open={removePlatesDialogOpen}
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

DashboardMenu.propTypes = propTypes;

export default DashboardMenu;
