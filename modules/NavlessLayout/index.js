import React, { PropTypes } from "react";

const NavlessLayout = props => {
  return (
    <div>
      {props.children}
    </div>
  );
};

NavlessLayout.propTypes = {
  children: PropTypes.node
};

export default NavlessLayout;
