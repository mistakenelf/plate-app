import { compose, graphql } from 'react-apollo'
import { injectState, provideState } from 'freactal'

import Card from '../../../components/Card/Card'
import EditPlateDialog from './EditPlateDialog'
import EditPlateMutation from '../../../mutations/EditPlateMutation'
import Link from 'next/link'
import Modal from '../../../components/Modal/Modal'
import PlatesQuery from '../../../queries/PlatesQuery'
import PropTypes from 'prop-types'
import React from 'react'
import RemovePlateMutation from '../../../mutations/RemovePlateMutation'

const wrapComponentWithState = provideState({
  initialState: () => ({
    washPlateOpen: false,
    editPlateOpen: false
  }),
  effects: {
    washPlateHandleOpen: () => state =>
      Object.assign({}, state, { washPlateOpen: true }),
    washPlateHandleClose: () => state =>
      Object.assign({}, state, { washPlateOpen: false }),
    editPlateHandleOpen: () => state =>
      Object.assign({}, state, { editPlateOpen: true }),
    editPlateHandleClose: () => state =>
      Object.assign({}, state, { editPlateOpen: false })
  }
})

const deletePlate = async (removePlate, plateId, closeModal) => {
  await removePlate(plateId)
  closeModal()
}

const Plate = wrapComponentWithState(
  injectState(
    ({
      state,
      effects,
      description,
      plateId,
      status,
      editPlate,
      removePlate
    }) => {
      return (
        <div>
          <Card>
            <div>
              <h3>
                DESCRIPTION
              </h3>
              {description}
            </div>
            <div className="row">
              <button
                className="secondary"
                onClick={effects.washPlateHandleOpen}
              >
                Wash
              </button>
              <Link prefetch href={`/platefiller?id=${plateId}`}>
                <a>
                  <button className="primary">Fill Plate</button>
                </a>
              </Link>
            </div>
            <EditPlateDialog
              editPlateOpen={state.editPlateOpen}
              editPlateHandleClose={effects.editPlateHandleClose}
              plateId={plateId}
              plateName={name}
              plateStatus={status}
              plateDescription={description}
              editPlate={editPlate}
            />
          </Card>
          <Modal
            open={state.washPlateOpen}
            closeModal={effects.washPlateHandleClose}
          >
            <p>Are you sure you want to remove this plate?</p>
            <button
              onClick={() => {
                deletePlate(removePlate, plateId, effects.washPlateHandleClose)
              }}
              className="primary"
            >
              Remove
            </button>
            <button onClick={effects.washPlateHandleClose}>Cancel</button>
          </Modal>
        </div>
      )
    }
  )
)

Plate.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  plateId: PropTypes.string,
  removePlate: PropTypes.func,
  cardImage: PropTypes.string,
  status: PropTypes.string,
  content: PropTypes.string,
  editPlate: PropTypes.func,
  user: PropTypes.object
}

export default compose(
  graphql(RemovePlateMutation, {
    props: ({ mutate }) => ({
      removePlate: id => {
        return mutate({
          variables: { id },
          optimisticResponse: {
            __typename: 'Mutation',
            removePlate: {
              __typename: 'Plate',
              id
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
  }),
  graphql(EditPlateMutation, {
    props: ({ mutate }) => ({
      editPlate: (id, name, description, status) => {
        return mutate({
          variables: { id, name, description, status },
          optimisticResponse: {
            __typename: 'Mutation',
            editPlate: {
              __typename: 'Plate',
              name,
              description,
              status
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
)(Plate)
