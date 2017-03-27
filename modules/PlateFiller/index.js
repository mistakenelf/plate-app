import React, { PropTypes } from "react";

import DefaultLayout from "../DefaultLayout";
import Header from "../../components/Header/Header";
import Overdrive from "react-overdrive";

const PlateFiller = props => {
  const { query } = props;

  return (
    <DefaultLayout>
      <Header title="Plate Filler" />
      <Overdrive id="fill-plate">
        <h1>Plate {query.id}</h1>
      </Overdrive>
    </DefaultLayout>
  );
};

PlateFiller.propTypes = {
  query: PropTypes.object
};

export default PlateFiller;
