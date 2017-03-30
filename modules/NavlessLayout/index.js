import React, { PropTypes } from "react";

const NavlessLayout = props => {
  return (
    <div>
      {props.children}
      <style jsx global>
        {
          `
          * {
            margin: 0;
            box-sizing: border-box;
          }
          body {
            font-family: Roboto, sans-serif;
            margin-top: 0px;
            margin-bottom: 0px;
            background: linear-gradient(-90deg, rgb(141, 95, 115), #343f53);
          }
          `
        }
      </style>
    </div>
  );
};

NavlessLayout.propTypes = {
  children: PropTypes.node
};

export default NavlessLayout;
