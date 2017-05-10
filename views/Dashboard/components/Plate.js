import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import Card from '../../../components/Card/Card'
import EditPlateDialog from './EditPlateDialog'
import EditPlateMutation from '../../../mutations/EditPlateMutation'
import Link from 'next/link'
import Modal from '../../../components/Modal/Modal'
import PlatesQuery from '../../../queries/PlatesQuery'
import PropTypes from 'prop-types'
import RemovePlateMutation from '../../../mutations/RemovePlateMutation'

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
    user: PropTypes.object
  }

  state = {
    washPlateOpen: false,
    editPlateOpen: false
  }

  washPlateHandleOpen = () => {
    this.setState({ washPlateOpen: true })
  }

  washPlateHandleClose = () => {
    this.setState({ washPlateOpen: false })
  }

  editPlateHandleOpen = () => {
    this.setState({ editPlateOpen: true })
  }

  editPlateHandleClose = () => {
    this.setState({ editPlateOpen: false })
  }

  deletePlate = async plateId => {
    await this.props.removePlate(plateId)
    this.washPlateHandleClose()
  }

  render() {
    return (
      <Card>
        <div>
          <h3 className="description">
            DESCRIPTION
          </h3>
          {this.props.description}
        </div>
        <div className="row">
          <button className="secondary" onClick={this.washPlateHandleOpen}>
            Wash
          </button>
          <Link prefetch href={`/platefiller?id=${this.props.plateId}`}>
            <a>
              <button className="primary">Fill Plate</button>
            </a>
          </Link>
        </div>
        <EditPlateDialog
          editPlateOpen={this.state.editPlateOpen}
          editPlateHandleClose={this.editPlateHandleClose}
          plateId={this.props.plateId}
          plateName={this.props.name}
          plateStatus={this.props.status}
          plateDescription={this.props.description}
          editPlate={this.props.editPlate}
        />
        <Modal open={this.state.washPlateOpen}>
          Are you sure you want to remove this plate?
        </Modal>
        <style jsx>{`
          .description {
            margin-bottom: 5px;
          }
        `}</style>
      </Card>
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
