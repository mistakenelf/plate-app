import React, { PropTypes } from "react";

const NavlessLayout = props => {
  return (
    <div>
      <style jsx global>
        {
          `
          * {
            margin: 0;
            box-sizing: border-box;
          }
          body {
            background: linear-gradient(-90deg, rgb(141, 95, 115), #343f53);
            font-family: 'Fira Sans', sans-serif;
          }
        `
        }
      </style>
      {props.children}
    </div>
  );
};

NavlessLayout.propTypes = {
  children: PropTypes.node
};

export default NavlessLayout;
