import React, { PropTypes } from "react";

import DashboardMenu from "./DashboardMenu";
import Plate from "../Plate/Plate";

const propTypes = {
  allPlates: PropTypes.array,
  addPlate: PropTypes.func,
  removePlate: PropTypes.func,
  refetch: PropTypes.func
};

const DashboardView = ({ allPlates, addPlate, removePlate, refetch }) => (
  <div>
    <div className="row">
      <div
        className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
        style={{ marginBottom: 10 }}
      >
        <DashboardMenu addPlate={addPlate} refetch={refetch} />
      </div>
    </div>
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
  </div>
);

DashboardView.propTypes = propTypes;

export default DashboardView;
