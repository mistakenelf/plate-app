import { Field, reduxForm } from "redux-form";
import React, { Component, PropTypes } from "react";
import { compose, graphql } from "react-apollo";

import { AllPlatesQuery } from "../utils/queries";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RenderTextField from "../utils/RenderTextField";
import { addPlateMutation } from "../utils/mutations";
import { addPlateValidations } from "../utils/validations";

class AddPlateDialog extends Component {
  static propTypes = {
    open: PropTypes.bool,
    closeDialog: PropTypes.func,
    addPlate: PropTypes.func,
    handleSubmit: PropTypes.func,
    reset: PropTypes.func
  };

  confirmAddPlate = () => {
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

    this.props.addPlate(plateName, plateDescription, plateColors[colorNumber]);
    this.props.closeDialog();
    this.props.reset();
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        type="button"
        secondary
        onTouchTap={this.props.closeDialog}
      />,
      <FlatButton label="Add Plate" form="plateForm" primary type="submit" />
    ];

    return (
      <Dialog
        title="Add A New Plate"
        modal={false}
        open={this.props.open}
        actions={actions}
        onRequestClose={this.props.closeDialog}
        contentStyle={{ width: "95%" }}
      >
        <form
          id="plateForm"
          onSubmit={this.props.handleSubmit(() => this.confirmAddPlate())}
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
  }
}

export default compose(
  reduxForm({
    form: "addPlateForm",
    validate: addPlateValidations
  }),
  graphql(addPlateMutation, {
    props: ({ mutate }) => ({
      addPlate: (name, description, thumbnail) =>
        mutate({ variables: { name, description, thumbnail } })
    }),
    options: {
      refetchQueries: [
        {
          query: AllPlatesQuery
        }
      ]
    }
  })
)(AddPlateDialog);
