import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import {
  editPlateMutation,
  removePlateMutation,
} from '../../mutations/dashboardMutations'

import Dialog from 'material-ui/Dialog'
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'
import EditPlateDialog from './EditPlateDialog'
import FlatButton from 'material-ui/FlatButton'
import Link from 'next/link'
import { PlatesQuery } from '../../queries/dashboardQueries'
import PropTypes from 'prop-types'

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

  deletePlate = plateId => {
    this.props.removePlate(plateId)
    this.washPlateHandleClose()
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.washPlateHandleClose}
      />,
      <FlatButton
        label="Wash"
        secondary
        onTouchTap={() => this.deletePlate(this.props.plateId)}
      />
    ]

    return (
      <div className="card">
        <Card style={{ borderRadius: 5 }}>
          <CardHeader
            title={this.props.name}
            subtitle={`Status: ${this.props.status}`}
            avatar={this.props.cardImage}
            showExpandableButton
            expandable={false}
            openIcon={<EditIcon onTouchTap={this.editPlateHandleOpen} />}
            closeIcon={<EditIcon onTouchTap={this.editPlateHandleOpen} />}
          />
          <CardText>
            <div>
              <h3 className="description">
                DESCRIPTION
              </h3>
              {this.props.description}
            </div>
          </CardText>
          <CardActions>
            <FlatButton
              label="Wash Plate"
              secondary
              onTouchTap={this.washPlateHandleOpen}
            />
            <Link
              prefetch
              href={`/platefiller?id=${this.props.plateId}`}
              as={`/platefiller/${this.props.plateId}`}
            >
              <a><FlatButton primary label="Fill Plate" /></a>
            </Link>
          </CardActions>
          <EditPlateDialog
            editPlateOpen={this.state.editPlateOpen}
            editPlateHandleClose={this.editPlateHandleClose}
            plateId={this.props.plateId}
            plateName={this.props.name}
            plateStatus={this.props.status}
            plateDescription={this.props.description}
            editPlate={this.props.editPlate}
          />
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.washPlateOpen}
            onRequestClose={this.washPlateHandleClose}
            contentStyle={{ width: '95%' }}
          >
            Are you sure you want to remove this plate?
          </Dialog>
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
  graphql(removePlateMutation, {
    props: ({ mutate }) => ({
      removePlate: id => mutate({ variables: { id } })
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
  graphql(editPlateMutation, {
    props: ({ mutate }) => ({
      editPlate: (id, name, description, status) =>
        mutate({ variables: { id, name, description, status } })
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
