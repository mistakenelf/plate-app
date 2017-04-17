import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ plateName }) => {
  return (
    <div>
      <div className="header">{plateName.toUpperCase()}</div>
      <div className="line" />
      <style jsx>
        {`
          .header {
            font-size: 45px;
            margin-top: 15px;
            margin-bottom: 15px;
            color: #424242;
            font-weight: bolder;
          }
          .line {
            margin-bottom: 20px;
            border-bottom: 4px solid #eee;
          }
        `}
      </style>
    </div>
  )
}

Header.propTypes = {
  plateName: PropTypes.string
}

export default Header
