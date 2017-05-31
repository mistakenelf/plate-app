import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import Card from '../../../components/Card/Card'
import EditPlateDialog from './EditPlateDialog'
import EditPlateMutation from '../../../mutations/editPlate'
import Link from 'next/link'
import Modal from '../../../components/Modal/Modal'
import PlatesQuery from '../../../queries/plates'
import PropTypes from 'prop-types'
import RecoverPlateMutation from '../../../mutations/recoverPlate'
import RecoverPlatesQuery from '../../../queries/recoveredPlates'
import RemovePlateMutation from '../../../mutations/removePlate'
import SpannerOutline from 'react-icons/lib/ti/spanner-outline'

class Plate extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    plateId: PropTypes.string,
    removePlate: PropTypes.func,
    cardImage: PropTypes.string,
    status: PropTypes.string,
    content: PropTypes.string,
    editPlate: PropTypes.func,
    user: PropTypes.object,
    recoverPlate: PropTypes.func
  }

  state = {
    washPlateOpen: false,
    editPlateOpen: false
  }

  washPlateHandleOpen = () => {
    this.setState({
      washPlateOpen: true
    })
  }

  washPlateHandleClose = () => {
    this.setState({
      washPlateOpen: false
    })
  }

  editPlateHandleOpen = () => {
    this.setState({
      editPlateOpen: true
    })
  }

  editPlateHandleClose = () => {
    this.setState({
      editPlateOpen: false
    })
  }

  deletePlate = async (
    recoverPlate,
    removePlate,
    plateId,
    name,
    description,
    cardImage,
    status,
    content,
    user
  ) => {
    await recoverPlate(
      name,
      description,
      cardImage,
      status,
      content,
      user.username
    )
    await removePlate(plateId)
    this.washPlateHandleClose
  }

  render() {
    const {
      user,
      description,
      plateId,
      status,
      name,
      editPlate,
      removePlate,
      cardImage,
      content,
      recoverPlate
    } = this.props
    return (
      <div>
        <Card
          headerText={name}
          avatar={cardImage}
          subheader={'Status: ' + status}
          footerItems={[
            <button
              type="button"
              key="1"
              onClick={this.washPlateHandleOpen}
              className="secondary bordered rounded"
            >
              Wash Plate
            </button>,
            <Link key="2" prefetch href={`/platefiller?id=${plateId}`}>
              <button type="button" className="primary bordered rounded">
                Fill Plate
              </button>
            </Link>
          ]}
          actionIcon={
            <SpannerOutline
              size={40}
              style={{ color: '#424242', cursor: 'pointer' }}
              onClick={this.editPlateHandleOpen}
            />
          }
        >
          {description}
        </Card>
        <EditPlateDialog
          editPlateOpen={this.state.editPlateOpen}
          editPlateHandleClose={this.editPlateHandleClose}
          plateId={plateId}
          plateName={name}
          plateStatus={status}
          plateDescription={description}
          editPlate={editPlate}
        />
        <Modal
          open={this.state.washPlateOpen}
          closeModal={this.washPlateHandleClose}
        >
          <h3 style={{ color: 'white', marginTop: 150 }}>
            Are you sure you want to remove this plate?
          </h3>
          <button
            type="button"
            onClick={() =>
              this.deletePlate(
                recoverPlate,
                removePlate,
                plateId,
                name,
                description,
                cardImage,
                status,
                content,
                user
              )}
            style={{ float: 'right' }}
            className="primary"
          >
            Remove
          </button>
          <button
            type="button"
            className="secondary"
            onClick={this.washPlateHandleClose}
          >
            Cancel
          </button>
        </Modal>
      </div>
    )
  }
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
  graphql(RecoverPlateMutation, {
    props: ({ mutate }) => ({
      recoverPlate: (
        name,
        description,
        thumbnail,
        status,
        content,
        createdBy
      ) => {
        return mutate({
          variables: {
            name,
            description,
            thumbnail,
            status,
            content,
            createdBy
          },
          optimisticResponse: {
            __typename: 'Mutation',
            recoverPlate: {
              __typename: 'Plate',
              name,
              description,
              thumbnail,
              status,
              content,
              createdBy
            }
          }
        })
      }
    }),
    options: props => ({
      refetchQueries: [
        {
          query: RecoverPlatesQuery,
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
              id,
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
