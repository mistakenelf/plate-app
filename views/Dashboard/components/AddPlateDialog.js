import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import AddPlateMutation from '../../../mutations/AddPlateMutation'
import Dialog from 'material-ui/Dialog'
import { Field } from 'redux-form'
import FlatButton from 'material-ui/FlatButton'
import PlatesQuery from '../../../queries/PlatesQuery'
import PropTypes from 'prop-types'

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
      '/static/img/wine.png',
      '/static/img/egg.png',
      '/static/img/garlic.png',
      '/static/img/milk.png',
      '/static/img/turkey.png',
      '/static/img/pizza.png'
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
        key="cancel"
        secondary
        onTouchTap={this.props.closeDialog}
      />,
      <FlatButton
        label="Add Plate"
        key="add"
        form="plateForm"
        primary
        type="submit"
      />
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
        <form id="plateForm" onSubmit={() => this.confirmAddPlate()}>
          <Field name="name" id="add_plate_name" type="text" label="Name" />
          <Field
            name="description"
            id="add_plate_description"
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
