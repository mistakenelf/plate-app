import {
  Card,
  CardActions,
  CardMedia,
  CardText,
  CardTitle,
} from "material-ui/Card";
import React, { PropTypes } from "react";

import FlatButton from "material-ui/FlatButton";
import Link from "next/link";

const markPlateComplete = (plateId, completed, completePlate) => {
  completePlate(plateId, !completed);
};

const deletePlate = (removePlate, plateId) => {
  removePlate(plateId);
};

const Plate = props => {
  return (
    <div className="card">
      <Card
        style={{
          borderRadius: 5
        }}
      >
        <CardMedia
          overlay={<CardTitle title={props.name} />}
          onTouchTap={() =>
            markPlateComplete(
              props.plateId,
              props.completed,
              props.completePlate
            )}
        >
          <img
            style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }}
            src={props.cardImage}
            width="208"
            height="214"
          />
        </CardMedia>
        <CardText>
          <div style={{ marginBottom: 10 }}>
            {props.description}
          </div>
          <div>
            Status: {props.completed ? "Closed" : "Open"}
          </div>
        </CardText>
        <CardActions>
          <FlatButton
            label="Wash Plate"
            secondary
            onTouchTap={() => deletePlate(props.removePlate, props.plateId)}
          />
          <Link
            prefetch
            href={{ pathname: "platefiller", query: { id: props.plateId } }}
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
