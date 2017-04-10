// @flow

import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { PlatesQuery } from '../util/queries';
import RenderTextField from '../util/RenderTextField';
import { addPlateMutation } from '../util/mutations';
import { addPlateValidations } from '../util/validations';

type Props = {
  open: boolean,
  closeDialog: Function,
  addPlate: Function,
  handleSubmit: Function,
  reset: Function
};

class AddPlateDialog extends Component {
  props: Props;

  confirmAddPlate = () => {
    const plateName = document.getElementById('name').value;
    const plateDescription = document.getElementById('description').value;

    const plateColors = [
      '/static/img/taskIcon/taskIconBlue.png',
      '/static/img/taskIcon/taskIconGreen.png',
      '/static/img/taskIcon/taskIconOrange.png',
      '/static/img/taskIcon/taskIconPink.png',
      '/static/img/taskIcon/taskIconRed.png',
      '/static/img/taskIcon/taskIconYellow.png'
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
        contentStyle={{ width: '95%' }}
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
    form: 'addPlateForm',
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
          query: PlatesQuery
        }
      ]
    }
  })
)(AddPlateDialog);
