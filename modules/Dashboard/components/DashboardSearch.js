import React, { PropTypes } from "react";

import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

const searchPlate = (searchText, doSearch) => {
  const input = document.getElementById("searchPlateText").value;
  doSearch(input);
};

const DashboardSearch = props => {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11 col-xl-11">
        <TextField hintText="Search Plate" id="searchPlateText" fullWidth />
      </div>
      <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1 col-xl-1">
        <RaisedButton
          label="Search"
          primary
          onClick={() => searchPlate(props.searchText, props.doSearch)}
        />
      </div>
    </div>
  );
};

DashboardSearch.propTypes = {
  searchText: PropTypes.string,
  doSearch: PropTypes.func
};

export default DashboardSearch;
