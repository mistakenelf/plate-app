// @flow

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

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
    <Dialog
      title="Remove All Plates"
      modal={false}
      open={open}
      actions={actions}
      onRequestClose={closeDialog}
      contentStyle={{ width: '95%' }}
    >
      <p>Are you sure you want to remove all plates?</p>
      <br />
    </Dialog>
  );
};
