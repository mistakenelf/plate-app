import React, { PropTypes } from "react";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

const deletePlate = (removePlate, plateId, refetch, closeRemovePlateDialog) => {
  removePlate(plateId);
  refetch();
  closeRemovePlateDialog();
};

const RemovePlateDialog = props => {
  const {
    removePlate,
    plateId,
    refetch,
    removePlateDialogOpen,
    closeRemovePlateDialog
  } = props;

  const actions = [
    <FlatButton
      label="Cancel"
      secondary
      onTouchTap={() => closeRemovePlateDialog()}
    />,
    <FlatButton
      label="Wash"
      primary
      onTouchTap={() =>
        deletePlate(removePlate, plateId, refetch, closeRemovePlateDialog)}
    />
  ];

  return (
    <Dialog
      title="Are you sure?"
      actions={actions}
      modal={false}
      open={removePlateDialogOpen}
      contentStyle={{ width: "95%" }}
      onRequestClose={() => closeRemovePlateDialog()}
    >
      Are you sure you want to remove this plate?
    </Dialog>
  );
};

RemovePlateDialog.propTypes = {
  removePlateDialogOpen: PropTypes.bool,
  closeRemovePlateDialog: PropTypes.func,
  removePlate: PropTypes.func,
  plateId: PropTypes.string,
  refetch: PropTypes.func
};

export default RemovePlateDialog;
