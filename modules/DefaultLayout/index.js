import React, { PropTypes } from "react";

import DefaultLayoutContainer from "./containers/DefaultLayoutContainer";

const DefaultLayout = ({ children }) => (
  <DefaultLayoutContainer>
    {children}
  </DefaultLayoutContainer>
);

DefaultLayout.propTypes = {
  children: PropTypes.node
};

export default DefaultLayout;
