import {
  Card,
  CardActions,
  CardMedia,
  CardText,
  CardTitle,
} from "material-ui/Card";
import React, { Component, PropTypes } from "react";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import Link from "next/link";

export default class Plate extends Component {
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

  deletePlate = (removePlate, plateId) => {
    removePlate(plateId);
  };

  markPlateComplete = (plateId, completed, completePlate) => {
    completePlate(plateId, !completed);
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary onTouchTap={this.handleClose} />,
      <FlatButton
        label="Discard"
        secondary
        onTouchTap={() =>
          this.deletePlate(this.props.removePlate, this.props.plateId)}
      />
    ];
    return (
      <div className="card">
        <Card
          style={
            this.props.completed
              ? { borderRadius: 5, backgroundColor: "#BBDEFB" }
              : { borderRadius: 5 }
          }
        >
          <CardMedia
            overlay={<CardTitle title={this.props.name} />}
            onTouchTap={() =>
              this.markPlateComplete(
                this.props.plateId,
                this.props.completed,
                this.props.completePlate
              )}
          >
            <img
              style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }}
              src={this.props.cardImage}
              width="208"
              height="214"
            />
          </CardMedia>
          <CardText>
            <div style={{ marginBottom: 10 }}>
              {this.props.description}
            </div>
            <div>
              Status: {this.props.completed ? "Completed" : "To Be Completed"}
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
                pathname: "platefiller",
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
            contentStyle={{ width: "95%" }}
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
          }
          `
          }
        </style>
      </div>
    );
  }
}
