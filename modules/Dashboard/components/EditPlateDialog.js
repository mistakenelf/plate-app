import React, { PropTypes } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const editPlateDetails = (id, editPlate, editPlateHandleClose) => {
  const newPlateName = document.getElementById('currentPlateName').value;
  const newPlateDescription = document.getElementById(
    'currentPlateDescription'
  ).value;

  editPlate(id, newPlateName, newPlateDescription);
  editPlateHandleClose();
};

const EditPlateDialog = props => {
  const actions = [
    <FlatButton
      label="Cancel"
      onTouchTap={props.editPlateHandleClose}
      primary
    />,
    <FlatButton
      label="Submit"
      secondary
      onTouchTap={() =>
        editPlateDetails(
          props.plateId,
          props.editPlate,
          props.editPlateHandleClose
        )}
    />
  ];

  return (
    <Dialog
      actions={actions}
      modal={false}
      open={props.editPlateOpen}
      onRequestClose={props.editPlateHandleClose}
      contentStyle={{ width: '95%' }}
    >
      <h3>Edit Plate</h3>
      <br />
      <span style={{ marginRight: 10 }}>ID:</span>
      <TextField id="text-field-default" defaultValue={props.plateId} />
      <br />
      <span style={{ marginRight: 10 }}>Name:</span>
      <TextField id="currentPlateName" defaultValue={props.plateName} />
      <br />
      <span style={{ marginRight: 10 }}>Description:</span>
      <TextField
        id="currentPlateDescription"
        defaultValue={props.plateDescription}
      />
    </Dialog>
  );
};

EditPlateDialog.propTypes = {
  editPlateOpen: PropTypes.bool,
  editPlateHandleClose: PropTypes.func,
  plateId: PropTypes.string,
  plateName: PropTypes.string,
  plateDescription: PropTypes.string,
  editPlate: PropTypes.func
};

export default EditPlateDialog;
