import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import AddPlateMutation from '../../../mutations/addPlate'
import Modal from '../../../components/Modal/Modal'
import PlatesQuery from '../../../queries/plates'
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

  confirmAddPlate = async e => {
    e.preventDefault()

    const plateName = document.getElementById('add_plate_name').value
    const plateDescription = document.getElementById('add_plate_description')
      .value

    const plateAvatars = [
      '/static/img/wine.png',
      '/static/img/egg.png',
      '/static/img/garlic.png',
      '/static/img/milk.png',
      '/static/img/turkey.png',
      '/static/img/pizza.png',
      '/static/img/toaster_pastry_frosted_small.png',
      '/static/img/Toast_n_Jelly.png',
      '/static/img/English_breakfast.png',
      '/static/img/cereal_hot.png',
      '/static/img/cereal_bowl.png',
      '/static/img/breakfast_burrito.png'
    ]

    const randomNum = Math.floor(Math.random() * 11)

    await this.props.addPlate(
      plateName,
      plateDescription,
      plateAvatars[randomNum],
      this.props.user.username
    )
    this.props.closeDialog()
  }

  render() {
    return (
      <Modal open={this.props.open} closeModal={this.props.closeDialog}>
        <div className="form-section">
          <form id="plateForm" onSubmit={e => this.confirmAddPlate(e)}>
            <fieldset>
              <legend>Add Plate</legend>
              <div className="input-group fluid">
                <label style={{ width: 90 }}>Plate Name</label>
                <input
                  name="name"
                  id="add_plate_name"
                  type="text"
                  label="Name"
                />
              </div>
              <div className="input-group fluid">
                <label style={{ width: 90 }}>Plate Description</label>
                <input
                  name="description"
                  id="add_plate_description"
                  type="text"
                  label="Description"
                />
              </div>
              <button
                type="submit"
                className="primary"
                style={{ float: 'right' }}
              >
                Add Plate
              </button>
            </fieldset>
          </form>
        </div>
        <style jsx>{`
          .form-section {
            margin: 20px;
          }
          `}</style>
      </Modal>
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
