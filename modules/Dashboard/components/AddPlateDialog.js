import { Field, reduxForm } from "redux-form";
import React, { PropTypes } from "react";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RenderTextField from "../utils/RenderTextField";
import { addPlateValidations } from "../utils/validations";

const confirmAddPlate = (addPlate, closeDialog, reset) => {
  const plateName = document.getElementById("name").value;
  const plateDescription = document.getElementById("description").value;

  const plateColors = [
    "/static/img/taskIcon/taskIconBlue.png",
    "/static/img/taskIcon/taskIconGreen.png",
    "/static/img/taskIcon/taskIconOrange.png",
    "/static/img/taskIcon/taskIconPink.png",
    "/static/img/taskIcon/taskIconRed.png",
    "/static/img/taskIcon/taskIconYellow.png"
  ];

  const colorNumber = Math.floor(Math.random() * 6);

  addPlate(plateName, plateDescription, plateColors[colorNumber]);
  closeDialog();
  reset();
};

const AddPlateDialog = props => {
  const actions = [
    <FlatButton
      label="Cancel"
      type="button"
      secondary
      onTouchTap={props.closeDialog}
    />,
    <FlatButton label="Add Plate" form="plateForm" primary type="submit" />
  ];

  return (
    <Dialog
      title="Add A New Plate"
      modal={false}
      open={props.open}
      actions={actions}
      onRequestClose={props.closeDialog}
      contentStyle={{ width: "95%" }}
    >
      <form
        id="plateForm"
        onSubmit={props.handleSubmit(() =>
          confirmAddPlate(props.addPlate, props.closeDialog, props.reset))}
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

AddPlateDialog.propTypes = {
  open: PropTypes.bool,
  closeDialog: PropTypes.func,
  addPlate: PropTypes.func,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func
};

export default reduxForm({
  form: "addPlateForm",
  validate: addPlateValidations
})(AddPlateDialog);
