import { Field, reduxForm } from 'redux-form';
import React, { PropTypes } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RenderTextField from '../util/RenderTextField';
import { editPlateValidations } from '../util/validations';

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
    <FlatButton label="Submit" form="editPlateForm" secondary type="submit" />
  ];

  return (
    <Dialog
      actions={actions}
      modal={false}
      open={props.editPlateOpen}
      onRequestClose={props.editPlateHandleClose}
      contentStyle={{ width: '95%' }}
    >
      <h3 style={{ marginBottom: 10 }}>Edit Plate</h3>
      <form
        id="editPlateForm"
        onSubmit={props.handleSubmit(() =>
          editPlateDetails(
            props.plateId,
            props.editPlate,
            props.editPlateHandleClose
          ))}
      >
        <span style={{ marginRight: 10 }}>Name:</span>
        <Field
          name="currentPlateName"
          id="currentPlateName"
          component={RenderTextField}
          type="text"
          label={props.plateName}
          style={{ marginBottom: 20 }}
        />
        <span style={{ marginRight: 10 }}>Description:</span>
        <Field
          name="currentPlateDescription"
          id="currentPlateDescription"
          component={RenderTextField}
          type="text"
          label={props.plateDescription}
        />
      </form>
    </Dialog>
  );
};

EditPlateDialog.propTypes = {
  editPlateOpen: PropTypes.bool,
  editPlateHandleClose: PropTypes.func,
  plateId: PropTypes.string,
  plateName: PropTypes.string,
  plateDescription: PropTypes.string,
  editPlate: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'editPlateForm',
  validate: editPlateValidations
})(EditPlateDialog);
