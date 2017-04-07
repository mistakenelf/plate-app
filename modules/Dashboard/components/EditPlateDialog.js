import React, { Component, PropTypes } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class EditPlateDialog extends Component {
  static propTypes = {
    editPlateOpen: PropTypes.bool,
    editPlateHandleClose: PropTypes.func,
    plateId: PropTypes.string,
    plateName: PropTypes.string,
    plateDescription: PropTypes.string,
    editPlate: PropTypes.func
  };

  editPlateDetails = (id, editPlate, editPlateHandleClose) => {
    const newPlateName = document.getElementById('currentPlateName').value;
    const newPlateDescription = document.getElementById(
      'currentPlateDescription'
    ).value;

    editPlate(id, newPlateName, newPlateDescription);
    editPlateHandleClose();
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.props.editPlateHandleClose}
        primary
      />,
      <FlatButton
        label="Submit"
        secondary
        onTouchTap={() =>
          this.editPlateDetails(
            this.props.plateId,
            this.props.editPlate,
            this.props.editPlateHandleClose
          )}
      />
    ];

    return (
      <Dialog
        actions={actions}
        modal={false}
        open={this.props.editPlateOpen}
        onRequestClose={this.props.editPlateHandleClose}
        contentStyle={{ width: '95%' }}
      >
        <h3>Edit Plate</h3>
        <br />
        <span style={{ marginRight: 10 }}>Name:</span>
        <TextField id="currentPlateName" defaultValue={this.props.plateName} />
        <br />
        <span style={{ marginRight: 10 }}>Description:</span>
        <TextField
          id="currentPlateDescription"
          defaultValue={this.props.plateDescription}
        />
      </Dialog>
    );
  }
}

export default EditPlateDialog;
