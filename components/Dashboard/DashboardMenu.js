import React, { Component, PropTypes } from "react";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
} from "material-ui/Toolbar";

import AddPlateDialog from "../AddPlateDialog/AddPlateDialog";
import Block from "material-ui/svg-icons/content/block";
import DashBoardSearch from "./DashboardSearch";
import Divider from "material-ui/Divider";
import DoneAll from "material-ui/svg-icons/action/done-all";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import NavigationExpandMoreIcon
  from "material-ui/svg-icons/navigation/expand-more";
import RaisedButton from "material-ui/RaisedButton";
import RemovePlatesDialog from "../RemovePlatesDialog/RemovePlatesDialog";

class DashboardMenu extends Component {
  static propTypes = {
    addPlate: PropTypes.func,
    refetch: PropTypes.func,
    searchText: PropTypes.string,
    doSearch: PropTypes.func
  };

  state = {
    newPlateDialogOpen: false,
    removePlatesDialogOpen: false
  };

  openNewPlateDialog = () => {
    this.setState({
      newPlateDialogOpen: true
    });
  };

  closeNewPlateDialog = () => {
    this.setState({
      newPlateDialogOpen: false
    });
  };

  openRemovePlatesDialog = () => {
    this.setState({
      removePlatesDialogOpen: true
    });
  };

  closeRemovePlatesDialog = () => {
    this.setState({
      removePlatesDialogOpen: false
    });
  };

  render() {
    const { addPlate, refetch, searchText, doSearch } = this.props;

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
              <IconButton
                tooltip="Remove all plates"
                onTouchTap={this.openRemovePlatesDialog}
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
                onTouchTap={this.openNewPlateDialog}
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
                  onTouchTap={this.openNewPlateDialog}
                />
                <Divider />
                <MenuItem primaryText="Mark All Complete" />
                <Divider />
                <MenuItem
                  primaryText="Remove All"
                  onTouchTap={this.openRemovePlatesDialog}
                />
              </IconMenu>
            </ToolbarGroup>
          </Toolbar>
        </div>
        <AddPlateDialog
          open={this.state.newPlateDialogOpen}
          openDialog={this.openNewPlateDialog}
          closeDialog={this.closeNewPlateDialog}
          addPlate={addPlate}
          refetch={refetch}
        />
        <RemovePlatesDialog
          open={this.state.removePlatesDialogOpen}
          openDialog={this.openRemovePlatesDialog}
          closeDialog={this.closeRemovePlatesDialog}
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
  }
}

export default DashboardMenu;
