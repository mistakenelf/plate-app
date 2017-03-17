import React, { PropTypes } from "react";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

const deletePlate = (removePlate, plateId, refetch) => {
  removePlate(plateId);
  refetch();
};

const RemovePlateDialog = (
  { open, handleClose, removePlate, plateId, refetch }
) => {
  const actions = [
    <FlatButton label="Cancel" secondary onTouchTap={handleClose} />,
    <FlatButton
      label="Wash"
      primary
      onTouchTap={() => deletePlate(removePlate, plateId, refetch)}
    />
  ];

  return (
    <Dialog
      title="Are you sure?"
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={handleClose}
    >
      Are you sure you want to remove this plate?
    </Dialog>
  );
};

RemovePlateDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  removePlate: PropTypes.func,
  plateId: PropTypes.string,
  refetch: PropTypes.func
};

export default RemovePlateDialog;
