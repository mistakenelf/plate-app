import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import React, { PropTypes } from "react";

import FlatButton from "material-ui/FlatButton";

const propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  plateId: PropTypes.string,
  removePlate: PropTypes.func,
  refetch: PropTypes.func
};

const deletePlate = (plateId, removePlate, refetch) => {
  removePlate(plateId);
  refetch();
};

const Plate = ({ plateId, name, description, removePlate, refetch }) => (
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
        onTouchTap={() => deletePlate(plateId, removePlate, refetch)}
      />
      <FlatButton label="Fill Plate" />
    </CardActions>
    <CardText expandable>
      {description}
    </CardText>
  </Card>
);

Plate.propTypes = propTypes;

export default Plate;
