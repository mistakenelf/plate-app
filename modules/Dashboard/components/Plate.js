import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardText,
  CardTitle,
} from "material-ui/Card";
import React, { PropTypes } from "react";

import CheckCircle from "material-ui/svg-icons/action/check-circle";
import FlatButton from "material-ui/FlatButton";
import Link from "next/link";

const markPlateComplete = (plateId, completed, completePlate) => {
  completePlate(plateId, !completed);
};

const deletePlate = (removePlate, plateId) => {
  removePlate(plateId);
};

const Plate = props => {
  const {
    name,
    plateId,
    description,
    removePlate,
    cardImage,
    completed,
    completePlate
  } = props;

  return (
    <div className="card">
      <Card style={{ borderRadius: 5 }}>
        {completed &&
          <CardHeader
            title={name + " is completed!"}
            avatar={<CheckCircle style={{ color: "green" }} />}
          />}
        <CardMedia
          overlay={<CardTitle title={name} />}
          onTouchTap={() =>
            markPlateComplete(plateId, completed, completePlate)}
        >
          <img
            style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }}
            src={cardImage}
            width="208"
            height="214"
          />
        </CardMedia>
        <CardText>
          {description}
        </CardText>
        <CardActions>
          <FlatButton
            label="Wash Plate"
            secondary
            onTouchTap={() => deletePlate(removePlate, plateId)}
          />
          <Link
            prefetch
            href={{ pathname: "platefiller", query: { id: plateId } }}
          >
            <a><FlatButton primary label="Fill Plate" /></a>
          </Link>
        </CardActions>
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
};

Plate.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  plateId: PropTypes.string,
  removePlate: PropTypes.func,
  cardImage: PropTypes.string,
  completed: PropTypes.bool,
  completePlate: PropTypes.func
};

export default Plate;
