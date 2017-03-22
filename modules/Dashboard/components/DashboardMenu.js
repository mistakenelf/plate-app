import React, { PropTypes } from "react";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
} from "material-ui/Toolbar";

import AddPlateDialog from "./AddPlateDialog";
import DashBoardSearch from "./DashboardSearch";
import Divider from "material-ui/Divider";
import DoneAll from "material-ui/svg-icons/action/done-all";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import NavigationExpandMoreIcon
  from "material-ui/svg-icons/navigation/expand-more";
import RaisedButton from "material-ui/RaisedButton";

const DashboardMenu = props => {
  const {
    addPlate,
    refetch,
    searchText,
    doSearch,
    createPlateDialogOpen,
    openCreatePlateDialog,
    closeCreatePlateDialog
  } = props;

  return (
    <div>
      <div className="toolbar-desktop">
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Manage Plates" />
          </ToolbarGroup>
          <ToolbarGroup>
            <DashBoardSearch searchText={searchText} doSearch={doSearch} />
          </ToolbarGroup>
          <ToolbarGroup>
            <IconButton tooltip="Mark all plates as done">
              <DoneAll />
            </IconButton>
            <ToolbarSeparator />
            <RaisedButton
              primary
              label="Create Plate"
              onTouchTap={() => openCreatePlateDialog()}
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
                onTouchTap={() => openCreatePlateDialog()}
              />
              <Divider />
              <MenuItem primaryText="Mark All Complete" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
      </div>
      <AddPlateDialog
        open={createPlateDialogOpen}
        closeDialog={closeCreatePlateDialog}
        addPlate={addPlate}
        refetch={refetch}
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
};

DashboardMenu.propTypes = {
  addPlate: PropTypes.func,
  refetch: PropTypes.func,
  searchText: PropTypes.string,
  doSearch: PropTypes.func,
  createPlateDialogOpen: PropTypes.bool,
  openCreatePlateDialog: PropTypes.func,
  closeCreatePlateDialog: PropTypes.func
};

export default DashboardMenu;
