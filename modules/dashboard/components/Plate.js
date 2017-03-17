import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import React, { PropTypes } from "react";

import FlatButton from "material-ui/FlatButton";
import Link from "next/link";

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
      <Link prefetch href={`/plateFiller?id=${plateId}`}>
        <a><FlatButton label="Fill Plate" /></a>
      </Link>
    </CardActions>
    <CardText expandable>
      {description}
    </CardText>
  </Card>
);

Plate.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  plateId: PropTypes.string,
  removePlate: PropTypes.func,
  refetch: PropTypes.func
};

export default Plate;
