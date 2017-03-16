import React from "react";
import TextField from "material-ui/TextField";

const searchPlate = () => {
  console.log(document.getElementById("searchPlateText").value);
};

export default () => (
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <TextField
        hintText="Search Plate"
        id="searchPlateText"
        onChange={searchPlate}
        fullWidth
      />
    </div>
  </div>
);
