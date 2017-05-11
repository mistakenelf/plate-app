import PropTypes from 'prop-types'
import React from 'react'

const Card = ({
  children,
  style,
  headerText,
  avatar,
  subheader,
  actionIcon,
  footerItems
}) => {
  return (
    <div className="card fluid custom-card" style={style}>
      <div className="header-container">
        {avatar && <img className="avatar" src={avatar} />}
        {headerText && <div className="card-header">{headerText}</div>}
        {actionIcon && <span className="action-icon">{actionIcon}</span>}
      </div>
      {subheader && <div className="sub-header">{subheader}</div>}
      <div className="card-content">
        {children}
      </div>
      <div className="card-footer">
        {footerItems && footerItems}
      </div>
      <style jsx>{`
        .custom-card {
          border-radius: 6px;
          padding: 10px;
          box-shadow: 0 6px 4px -4px black;
        }
        .avatar {
          margin-right: 10px;
          width: 50px !important;
          height: 50px !important;
        }
        .header-container {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .sub-header {
          font-size: 14px;
          margin-top: 5px;
          margin-bottom: 5px;
          color: #888;
        }
        .card-header {
          font-weight: bolder;
          font-size: 20px;
          color: #424242;
        }
        .card-content {
          color: #424242;
          font-size: 14px;
        }
        .action-icon {
          margin-left: auto;
          top: 0;
          padding: 5px;
        }
        .card-footer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      `}</style>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  headerText: PropTypes.string,
  avatar: PropTypes.string,
  subheader: PropTypes.string,
  actionIcon: PropTypes.node
}

export default Card
