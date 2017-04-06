import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import React, { Component, PropTypes } from 'react';
import { completePlateMutation, removePlateMutation } from '../util/mutations';
import { compose, graphql } from 'react-apollo';

import { AllPlatesQuery } from '../util/queries';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Dialog from 'material-ui/Dialog';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import EditPlateDialog from './EditPlateDialog';
import FlatButton from 'material-ui/FlatButton';
import Link from 'next/link';
import { green500 } from 'material-ui/styles/colors';

class Plate extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    plateId: PropTypes.string,
    removePlate: PropTypes.func,
    cardImage: PropTypes.string,
    completed: PropTypes.bool,
    completePlate: PropTypes.func
  };

  state = {
    washPlateOpen: false,
    editPlateOpen: false
  };

  washPlateHandleOpen = () => {
    this.setState({ washPlateOpen: true });
  };

  washPlateHandleClose = () => {
    this.setState({ washPlateOpen: false });
  };

  editPlateHandleOpen = () => {
    this.setState({ editPlateOpen: true });
  };

  editPlateHandleClose = () => {
    this.setState({ editPlateOpen: false });
  };

  deletePlate = plateId => {
    this.props.removePlate(plateId);
    this.washPlateHandleClose();
  };

  markPlateComplete = (plateId, completed) => {
    this.props.completePlate(plateId, !completed);
  };

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
    ];

    return (
      <div className="card">
        <Card style={{ borderRadius: 5 }}>
          <CardHeader
            title={this.props.name}
            subtitle={
              `Status: ${this.props.completed ? 'Completed' : 'To Be Completed'}`
            }
            showExpandableButton
            expandable={false}
            openIcon={
              <CheckCircle
                color={green500}
                onTouchTap={() =>
                  this.markPlateComplete(
                    this.props.plateId,
                    this.props.completed
                  )}
              />
            }
            closeIcon={
              <div>
                <EditIcon
                  style={{ color: 'grey', float: 'right', cursor: 'pointer' }}
                  onTouchTap={this.editPlateHandleOpen}
                />
              </div>
            }
            avatar={this.props.cardImage}
          />
          <CardText>
            <div>
              <h3 style={{ marginBottom: 5 }}>
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
              href={{
                pathname: 'platefiller',
                query: { id: this.props.plateId }
              }}
            >
              <a><FlatButton primary label="Fill Plate" /></a>
            </Link>
          </CardActions>
          <EditPlateDialog
            editPlateOpen={this.state.editPlateOpen}
            editPlateHandleClose={this.editPlateHandleClose}
            plateName={this.props.name}
            plateDescription={this.props.description}
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
          {
            `
            .card {
              transition: 0.3s;
            }

            .card:hover {
              box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2);
              border-radius: 10px;
            }
            `
          }
        </style>
      </div>
    );
  }
}

export default compose(
  graphql(removePlateMutation, {
    props: ({ mutate }) => ({
      removePlate: id => mutate({ variables: { id } })
    }),
    options: {
      refetchQueries: [
        {
          query: AllPlatesQuery
        }
      ]
    }
  }),
  graphql(completePlateMutation, {
    props: ({ mutate }) => ({
      completePlate: (id, completed) => mutate({ variables: { id, completed } })
    }),
    options: {
      refetchQueries: [
        {
          query: AllPlatesQuery
        }
      ]
    }
  })
)(Plate);
