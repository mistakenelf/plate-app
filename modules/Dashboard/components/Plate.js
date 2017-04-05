import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import React, { Component, PropTypes } from 'react';
import { completePlateMutation, removePlateMutation } from '../util/mutations';
import { compose, graphql } from 'react-apollo';

import { AllPlatesQuery } from '../util/queries';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Dialog from 'material-ui/Dialog';
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
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  deletePlate = plateId => {
    this.props.removePlate(plateId);
    this.handleClose();
  };

  markPlateComplete = (plateId, completed) => {
    this.props.completePlate(plateId, !completed);
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary onTouchTap={this.handleClose} />,
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
              <CheckCircle
                color={green500}
                onTouchTap={() =>
                  this.markPlateComplete(
                    this.props.plateId,
                    this.props.completed
                  )}
              />
            }
            avatar={this.props.cardImage}
          />
          <CardText>
            <div>
              <h3 style={{ marginBottom: 5 }}>DESCRIPTION</h3>
              {this.props.description}
            </div>
          </CardText>
          <CardActions>
            <FlatButton
              label="Wash Plate"
              secondary
              onTouchTap={this.handleOpen}
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
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
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
