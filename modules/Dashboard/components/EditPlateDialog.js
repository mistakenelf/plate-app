import React, { PropTypes } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const actions = [
  <FlatButton label="Cancel" primary />,
  <FlatButton label="Submit" secondary />
];

const EditPlateDialog = props => (
  <Dialog
    actions={actions}
    modal={false}
    open={props.editPlateOpen}
    onRequestClose={props.editPlateHandleClose}
    contentStyle={{ width: '95%' }}
  >
    <h4>Edit Plate</h4>
    <span style={{ marginRight: 10 }}>Name:</span>
    <TextField id="text-field-default" defaultValue={props.plateName} />
    <br />
    <span style={{ marginRight: 10 }}>Description:</span>
    <TextField id="text-field-default" defaultValue={props.plateDescription} />
  </Dialog>
);

EditPlateDialog.propTypes = {
  editPlateOpen: PropTypes.bool,
  editPlateHandleClose: PropTypes.func,
  plateName: PropTypes.string,
  plateDescription: PropTypes.string
};

export default EditPlateDialog;
