import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
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
    refetch: PropTypes.func
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
    const { name, plateId, description, removePlate, refetch } = this.props;

    return (
      <Card>
        <CardHeader
          title={name}
          subtitle="Subtitle"
          actAsExpander
          showExpandableButton
        />
        <CardActions>
          <FlatButton
            label="Wash Plate"
            secondary
            onTouchTap={this.handleOpen}
          />
          <Link prefetch href={`/plateFiller?id=${plateId}`}>
            <a><FlatButton primary label="Fill Plate" /></a>
          </Link>
        </CardActions>
        <CardText expandable>
          {description}
        </CardText>
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
