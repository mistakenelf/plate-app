import PropTypes from 'prop-types'
import React from 'react'

export default function PageHeader({ headerText }) {
  return (
    <div className="header-container">
      <div className="header all-caps">{headerText}</div>
      <style jsx>{`
        .header-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          border-bottom: 4px solid #eee;
          margin-bottom: 20px;
          justify-content: space-between;
        }
        .header {
          font-size: 35px;
          margin-top: 15px;
          margin-bottom: 15px;
          color: #424242;
          font-weight: bolder;
        }
        .all-caps {
          text-transform: uppercase;
        }
      `}</style>
    </div>
  )
}

PageHeader.propTypes = {
  headerText: PropTypes.string
}
