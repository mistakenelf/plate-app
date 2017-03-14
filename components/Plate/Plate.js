// @flow

import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";

import FlatButton from "material-ui/FlatButton";
import React from "react";

type Props = {
  name?: string,
  description?: string
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
