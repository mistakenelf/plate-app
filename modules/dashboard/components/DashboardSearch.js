import React, { PropTypes } from "react";

import TextField from "material-ui/TextField";

const propTypes = {
  searchText: PropTypes.string,
  doSearch: PropTypes.func
};

const searchPlate = (searchText, doSearch) => {
  const input = document.getElementById("searchPlateText").value;
  doSearch(input);
};

const DashboardSearch = ({ searchText, doSearch }) => (
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11 col-xl-11">
      <TextField
        hintText="Search Plate"
        id="searchPlateText"
        onChange={() => searchPlate(searchText, doSearch)}
        fullWidth
      />
    </div>
  </div>
);

DashboardSearch.propTypes = propTypes;

export default DashboardSearch;
