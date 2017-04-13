import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ plateName }) => {
  return (
    <div>
      <div className="header">{plateName.toUpperCase()}</div>
      <hr style={{ marginBottom: 15 }} />
      <style jsx>
        {
          `
            .header {
              font-size: 45px;
            }
          `
        }
      </style>
    </div>
  );
};

Header.propTypes = {
  plateName: PropTypes.string
};

export default Header;
