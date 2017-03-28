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
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import NavigationExpandMoreIcon
  from "material-ui/svg-icons/navigation/expand-more";
import RaisedButton from "material-ui/RaisedButton";

const DashboardMenu = props => {
  return (
    <div>
      <div className="toolbar-desktop">
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Manage Plates" />
          </ToolbarGroup>
          <ToolbarGroup>
            <DashBoardSearch
              searchText={props.searchText}
              doSearch={props.doSearch}
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarSeparator />
            <RaisedButton
              primary
              label="Create Plate"
              onTouchTap={() => props.openCreatePlateDialog()}
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
                onTouchTap={() => props.openCreatePlateDialog()}
              />
              <Divider />
              <MenuItem primaryText="Mark All Complete" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
      </div>
      <AddPlateDialog
        open={props.createPlateDialogOpen}
        closeDialog={props.closeCreatePlateDialog}
        addPlate={props.addPlate}
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
  searchText: PropTypes.string,
  doSearch: PropTypes.func,
  createPlateDialogOpen: PropTypes.bool,
  openCreatePlateDialog: PropTypes.func,
  closeCreatePlateDialog: PropTypes.func
};

export default DashboardMenu;
