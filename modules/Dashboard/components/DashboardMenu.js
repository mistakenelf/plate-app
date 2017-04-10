// @flow

import React, { Component } from 'react';

import AddPlateDialog from './AddPlateDialog';
import DesktopToolbar from './DesktopToolbar';
import MobileToolbar from './MobileToolbar';

type Props = {
  addPlate: Function
};

class DashboardMenu extends Component {
  props: Props;

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <DesktopToolbar openDialog={this.handleOpen} />
        <MobileToolbar openDialog={this.handleOpen} />
        <AddPlateDialog
          open={this.state.open}
          closeDialog={this.handleClose}
          addPlate={this.props.addPlate}
        />
      </div>
    );
  }
}

export default DashboardMenu;
