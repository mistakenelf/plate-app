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
    const actions = [
      <input
        type="button"
        className="primary"
        value="Cancel"
        onClick={this.washPlateHandleClose}
      />,
      <input
        type="button"
        className="secondary"
        value="Cancel"
        onClick={() => this.deletePlate(this.props.plateId)}
      />
    ]

    return (
      <div className="card">
        <Card style={{ borderRadius: 5 }}>
          <div>
            <h3 className="description">
              DESCRIPTION
            </h3>
            {this.props.description}
          </div>
          <input
            type="button"
            className="secondary"
            value="Cancel"
            onClick={this.wasPlateHandleOpen}
          />
          <Link prefetch href={`/platefiller?id=${this.props.plateId}`}>
            <a>
              <input type="button" className="primary" value="Fill Plate" />
            </a>
          </Link>
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
        </Card>
        <style jsx>
          {`
            .card {
              transition: 0.3s;
            }
            .card:hover {
              box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2);
              border-radius: 10px;
            }
            .description {
              margin-bottom: 5px;
            }
          `}
        </style>
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
