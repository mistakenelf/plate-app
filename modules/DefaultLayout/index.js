import React, { PropTypes } from "react";

import DefaultLayoutContainer from "./containers/DefaultLayoutContainer";

const DefaultLayout = props => {
  const { children } = props;

  return (
    <DefaultLayoutContainer>
      {children}
    </DefaultLayoutContainer>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node
};

export default DefaultLayout;
