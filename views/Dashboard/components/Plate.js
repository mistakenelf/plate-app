import { compose, graphql } from 'react-apollo'
import { injectState, provideState } from 'freactal'

import Card from '../../../components/Card/Card'
import EditPlateDialog from './EditPlateDialog'
import EditPlateMutation from '../../../mutations/EditPlateMutation'
import Icon from '../../../components/Icon/Icon'
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
      name,
      editPlate,
      removePlate,
      cardImage
    }) => {
      return (
        <div>
          <Card
            headerText={name}
            avatar={cardImage}
            subheader={'Status: ' + status}
            footerItems={[
              <button
                key="1"
                onClick={effects.washPlateHandleOpen}
                className="secondary"
              >
                Wash Plate
              </button>,
              <Link key="2" prefetch href={`/platefiller?id=${plateId}`}>
                <button className="primary">Fill Plate</button>
              </Link>
            ]}
            actionIcon={
              <Icon
                style={{ color: '#424242', cursor: 'pointer' }}
                type="fa fa-cog"
                onClick={effects.editPlateHandleOpen}
              />
            }
          >
            {description}
          </Card>
          <EditPlateDialog
            editPlateOpen={state.editPlateOpen}
            editPlateHandleClose={effects.editPlateHandleClose}
            plateId={plateId}
            plateName={name}
            plateStatus={status}
            plateDescription={description}
            editPlate={editPlate}
          />
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
          <style jsx>{`
            .card-image {
              position: absolute;
              width: 50px;
              height: 50px;
              top: 5px;
              right: 5px;
            }
            `}</style>
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
