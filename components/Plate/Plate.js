import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import React, { PropTypes } from "react";

import FlatButton from "material-ui/FlatButton";

const propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};

const Plate = ({ name, description }) => (
  <Card>
    <CardHeader
      title={name}
      subtitle="Subtitle"
      actAsExpander
      showExpandableButton
    />
    <CardActions>
      <FlatButton label="Wash Plate" />
      <FlatButton label="Fill Plate" />
    </CardActions>
    <CardText expandable>
      {description}
    </CardText>
  </Card>
);

Plate.propTypes = propTypes;

export default Plate;
