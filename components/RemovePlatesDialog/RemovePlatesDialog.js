// @flow

import Dialog from "material-ui/Dialog";
import ErrorIcon from "material-ui/svg-icons/alert/error";
import FlatButton from "material-ui/FlatButton";
import React from "react";

type Props = {
  open?: boolean,
  openDialog?: Function,
  closeDialog?: Function
};

export default ({ open, openDialog, closeDialog }: Props) => {
  const actions = [
    <FlatButton label="Cancel" primary onTouchTap={closeDialog} />,
    <FlatButton label="Ok" primary onTouchTap={closeDialog} />
  ];
  return (
    <div>
      <Dialog
        modal={false}
        open={open}
        actions={actions}
        onRequestClose={closeDialog}
        contentStyle={{ width: "50%" }}
      >
        <div className="error-icon">
          <ErrorIcon />
        </div>
        <br />
        <div className="dialog-body">
          <p>Are you sure you want to remove all plates?</p>
        </div>
      </Dialog>
      <style jsx>
        {
          `
        .error-icon {
          display: flex;
          justify-content: center;
        }
        .dialog-body {
          display: flex;
          justify-content: center;
        }
      `
        }
      </style>
    </div>
  );
};
