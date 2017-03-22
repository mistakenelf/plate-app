import {
  Card,
  CardActions,
  CardMedia,
  CardText,
  CardTitle,
} from "material-ui/Card";
import React, { Component, PropTypes } from "react";

import FlatButton from "material-ui/FlatButton";
import Link from "next/link";
import RemovePlateDialog from "./RemovePlateDialog";

export default class Plate extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    plateId: PropTypes.string,
    removePlate: PropTypes.func,
    refetch: PropTypes.func,
    cardColor: PropTypes.string
  };

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const {
      name,
      plateId,
      description,
      removePlate,
      refetch,
      cardColor
    } = this.props;

    return (
      <Card style={{ borderRadius: 5 }}>
        <CardMedia overlay={<CardTitle title={name} />}>
          <img
            style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }}
            src={cardColor}
            width="208"
            height="214"
          />
        </CardMedia>
        <CardText expandable>
          {description}
        </CardText>
        <CardActions>
          <FlatButton
            label="Wash Plate"
            secondary
            onTouchTap={this.handleOpen}
          />
          <Link prefetch href={`/platefiller?id=${plateId}`}>
            <a><FlatButton primary label="Fill Plate" /></a>
          </Link>
        </CardActions>
        <RemovePlateDialog
          open={this.state.open}
          handleClose={this.handleClose}
          removePlate={removePlate}
          refetch={refetch}
          plateId={plateId}
        />
      </Card>
    );
  }
}
