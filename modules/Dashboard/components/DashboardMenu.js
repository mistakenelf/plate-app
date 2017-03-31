import React, { Component, PropTypes } from 'react';

import AddPlateDialog from './AddPlateDialog';
import DesktopToolbar from './DesktopToolbar';
import MobileToolbar from './MobileToolbar';

class DashboardMenu extends Component {
  static propTypes = {
    addPlate: PropTypes.func
  };

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
        <DesktopToolbar openCreatePlateDialog={this.handleOpen} />
        <MobileToolbar openCreatePlateDialog={this.handleOpen} />
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
