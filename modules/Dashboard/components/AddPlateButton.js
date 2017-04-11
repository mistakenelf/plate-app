import React, { Component } from 'react';

import AddPlateDialog from './AddPlateDialog';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

class AddPlateButton extends Component {
  state = {
    open: false
  };

  closeDialog = () => {
    this.setState({
      open: false
    });
  };

  openDialog = () => {
    this.setState({
      open: true
    });
  };

  render() {
    return (
      <div>
        <FloatingActionButton secondary={true} onTouchTap={this.openDialog}>
          <ContentAdd />
        </FloatingActionButton>
        <AddPlateDialog open={this.state.open} closeDialog={this.closeDialog} />
      </div>
    );
  }
}

export default AddPlateButton;
