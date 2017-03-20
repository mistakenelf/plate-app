import React, { PropTypes } from "react";

import DefaultLayout from "../DefaultLayout";
import Header from "../../components/Header/Header";

const PlateFiller = ({ query }) => (
  <DefaultLayout>
    <Header title="Plate Filler" />
    <h1>Plate {query.id}</h1>
  </DefaultLayout>
);

PlateFiller.propTypes = {
  query: PropTypes.object
};

export default PlateFiller;
