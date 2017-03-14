import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import React, { PropTypes } from "react";

import FlatButton from "material-ui/FlatButton";

const Props = {
  name: PropTypes.string,
  description: PropTypes.string
};

export default ({ name, description }: Props) => (
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
