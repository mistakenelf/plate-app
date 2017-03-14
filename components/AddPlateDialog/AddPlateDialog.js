import React, { PropTypes } from "react";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

const Props = {
  open: PropTypes.bool,
  closeDialog: PropTypes.func
};

export default ({ open, closeDialog }: Props) => {
  const actions = [
    <FlatButton label="Cancel" primary onTouchTap={closeDialog} />,
    <FlatButton label="Add Plate" primary />
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
      <TextField hintText="Name" fullWidth /><br />
      <TextField
        hintText="Description"
        fullWidth
        rows={4}
        rowsMax={4}
        multiLine
      />
    </Dialog>
  );
};
