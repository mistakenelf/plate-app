import React, { PropTypes } from "react";

import DefaultLayout from "../DefaultLayout";
import Header from "../../components/Header/Header";

const PlateFiller = props => {
  return (
    <DefaultLayout>
      <Header title="Plate Filler" />
      <h1>Plate {props.url.query.id}</h1>
    </DefaultLayout>
  );
};

PlateFiller.propTypes = {
  url: PropTypes.object
};

export default PlateFiller;
