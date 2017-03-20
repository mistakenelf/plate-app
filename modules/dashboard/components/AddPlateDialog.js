import { Field, reduxForm } from "redux-form";
import React, { PropTypes } from "react";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Please enter a plate name";
  }
  if (!values.description) {
    errors.description = "Please enter a plate description";
  }
  return errors;
};

const RenderTextField = (
  { input, label, meta: { touched, error }, ...custom }
) => (
  <TextField
    hintText={label}
    autoComplete={"off"}
    errorText={touched && error}
    fullWidth
    {...input}
    {...custom}
  />
);

const confirmAddPlate = (addPlate, closeDialog, refetch) => {
  const plateName = document.getElementById("name").value;
  const plateDescription = document.getElementById("description").value;
  const plateColors = [
    "#F3E5F5",
    "#BBDEFB",
    "#B2DFDB",
    "#E6EE9C",
    "#FFD180",
    "#CFD8DC"
  ];
  const colorNumber = Math.floor(Math.random() * 6);
  addPlate(plateName, plateDescription, plateColors[colorNumber]);
  closeDialog();
  refetch();
};

const AddPlateDialog = (
  { open, closeDialog, addPlate, refetch, handleSubmit }
) => {
  const actions = [
    <FlatButton
      label="Cancel"
      type="button"
      secondary
      onTouchTap={closeDialog}
    />,
    <FlatButton label="Add Plate" form="plateForm" primary type="submit" />
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
      <form
        id="plateForm"
        onSubmit={handleSubmit(() =>
          confirmAddPlate(addPlate, closeDialog, refetch))}
      >
        <Field
          name="name"
          id="name"
          component={RenderTextField}
          type="text"
          label="Name"
        />
        <Field
          name="description"
          id="description"
          component={RenderTextField}
          type="text"
          label="Description"
          rows={4}
          rowsMax={4}
          multiLine
        />
      </form>
    </Dialog>
  );
};

RenderTextField.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object
};

AddPlateDialog.propTypes = {
  open: PropTypes.bool,
  closeDialog: PropTypes.func,
  addPlate: PropTypes.func,
  refetch: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "addPlateForm",
  validate
})(AddPlateDialog);
