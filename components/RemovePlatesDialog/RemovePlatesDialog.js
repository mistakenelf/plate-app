// @flow

import Dialog from "material-ui/Dialog";
import ErrorIcon from "material-ui/svg-icons/alert/error";
import FlatButton from "material-ui/FlatButton";
import IconButton from "material-ui/IconButton";
import React from "react";
import { red500 } from "material-ui/styles/colors";

type Props = {
  open?: boolean,
  closeDialog?: Function
};

const styles = {
  largeIcon: {
    width: 80,
    height: 80,
    color: red500
  },
  large: {
    width: 120,
    height: 120,
    padding: 20
  }
};

export default ({ open, closeDialog }: Props) => {
  const actions = [
    <FlatButton label="Cancel" primary onTouchTap={closeDialog} />,
    <FlatButton label="Remove All" primary onTouchTap={closeDialog} />
  ];
  return (
    <div>
      <Dialog
        modal={false}
        open={open}
        actions={actions}
        onRequestClose={closeDialog}
        contentStyle={{ width: "95%" }}
      >
        <div className="container">
          <IconButton iconStyle={styles.largeIcon} style={styles.large}>
            <ErrorIcon />
          </IconButton>
          <p>Are you sure you want to remove all plates?</p>
        </div>
      </Dialog>
      <style jsx>
        {
          `
        .container {
          text-align: center;
        }
      `
        }
      </style>
    </div>
  );
};
