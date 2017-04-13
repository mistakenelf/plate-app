import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ plateId }) => {
  return (
    <div>
      <div>Plate {plateId}</div>
      <hr style={{ marginBottom: 15 }} />
    </div>
  );
};

Header.propTypes = {
  plateId: PropTypes.string
};

export default Header;
