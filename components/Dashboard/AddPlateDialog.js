import { Field, reduxForm } from 'redux-form'
import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import AddPlateMutation from '../../mutations/AddPlateMutation'
import AddPlateValidation from '../../validations/AddPlateValidation'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import PlatesQuery from '../../queries/PlatesQuery'
import PropTypes from 'prop-types'
import RenderAddPlateTextField from '../../utils/RenderAddPlateTextField'

class AddPlateDialog extends Component {
  static propTypes = {
    open: PropTypes.bool,
    closeDialog: PropTypes.func,
    addPlate: PropTypes.func,
    handleSubmit: PropTypes.func,
    reset: PropTypes.func,
    user: PropTypes.object
  }

  confirmAddPlate = async () => {
    const plateName = document.getElementById('add_plate_name').value
    const plateDescription = document.getElementById('add_plate_description')
      .value

    const plateColors = [
      'https://res.cloudinary.com/knipferrc/image/upload/v1493208940/wine_q6ujgl.png',
      'https://res.cloudinary.com/knipferrc/image/upload/v1493208939/milk_rbreh5.png',
      'https://res.cloudinary.com/knipferrc/image/upload/v1493208939/egg_q3tta8.png',
      'https://res.cloudinary.com/knipferrc/image/upload/v1493208939/garlic_un9gbg.png',
      'https://res.cloudinary.com/knipferrc/image/upload/v1493208939/turkey_d6sftw.png',
      'https://res.cloudinary.com/knipferrc/image/upload/v1493208939/pizza_pyyg8p.png'
    ]

    const colorNumber = Math.floor(Math.random() * 6)

    await this.props.addPlate(
      plateName,
      plateDescription,
      plateColors[colorNumber],
      this.props.user.username
    )
    this.props.closeDialog()
    this.props.reset()
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        type="button"
        secondary
        onTouchTap={this.props.closeDialog}
      />,
      <FlatButton label="Add Plate" form="plateForm" primary type="submit" />
    ]

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
            id="add_plate_name"
            component={RenderAddPlateTextField}
            type="text"
            label="Name"
          />
          <Field
            name="description"
            id="add_plate_description"
            component={RenderAddPlateTextField}
            type="text"
            label="Description"
            rows={4}
            rowsMax={4}
            multiLine
          />
        </form>
      </Dialog>
    )
  }
}

export default compose(
  reduxForm({
    form: 'addPlateForm',
    validate: AddPlateValidation
  }),
  graphql(AddPlateMutation, {
    props: ({ mutate }) => ({
      addPlate: (name, description, thumbnail, createdBy) => {
        return mutate({
          variables: { name, description, thumbnail, createdBy },
          optimisticResponse: {
            __typename: 'Mutation',
            addPlate: {
              __typename: 'Plate',
              name,
              description,
              thumbnail,
              createdBy
            }
          }
        })
      }
    }),
    options: props => ({
      refetchQueries: [
        {
          query: PlatesQuery,
          variables: { username: props.user.username }
        }
      ]
    })
  })
)(AddPlateDialog)
