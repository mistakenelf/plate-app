import React, { PropTypes } from "react";

import DefaultLayoutContainer from "./containers/DefaultLayoutContainer";

const DefaultLayout = props => {
  return (
    <DefaultLayoutContainer>
      {props.children}
    </DefaultLayoutContainer>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node
};

export default DefaultLayout;
