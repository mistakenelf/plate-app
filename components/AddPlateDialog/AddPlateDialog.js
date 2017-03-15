import React, { PropTypes } from "react";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

const propTypes = {
  open: PropTypes.bool,
  closeDialog: PropTypes.func,
  addPlate: PropTypes.func
};

const confirmAddPlate = (addPlate, closeDialog) => {
  const plateName = document.getElementById("plateName").value;
  const plateDescription = document.getElementById("plateDescription").value;
  addPlate(plateName, plateDescription);
  closeDialog();
};

const AddPlateDialog = ({ open, closeDialog, addPlate }) => {
  const actions = [
    <FlatButton label="Cancel" primary onTouchTap={closeDialog} />,
    <FlatButton
      label="Add Plate"
      primary
      onTouchTap={() => confirmAddPlate(addPlate, closeDialog)}
    />
  ];

  return (
    <Dialog
      title="Add A New Plate"
      modal={false}
      open={open}
      actions={actions}
      onRequestClose={closeDialog}
      contentStyle={{ width: "95%" }}
    >
      <TextField hintText="Name" fullWidth id="plateName" /><br />
      <TextField
        hintText="Description"
        id="plateDescription"
        fullWidth
        rows={4}
        rowsMax={4}
        multiLine
      />
    </Dialog>
  );
};

AddPlateDialog.propTypes = propTypes;

export default AddPlateDialog;
