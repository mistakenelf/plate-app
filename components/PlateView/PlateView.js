import React, { PropTypes } from "react";

import Plate from "../Plate/Plate";

const propTypes = {
  allPlates: PropTypes.array,
  removePlate: PropTypes.func,
  refetch: PropTypes.func
};

const PlateView = ({ allPlates, removePlate, refetch }) => (
  <div className="row">
    {allPlates.map((plate, index) => {
      return (
        <div
          key={index}
          className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
          style={{ marginBottom: 10 }}
        >
          <Plate
            plateId={plate.id}
            name={plate.name}
            description={plate.description}
            removePlate={removePlate}
            refetch={refetch}
          />
        </div>
      );
    })}
  </div>
);

PlateView.propTypes = propTypes;

export default PlateView;
