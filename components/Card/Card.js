import PropTypes from 'prop-types'
import React from 'react'

const Card = ({ children, style }) => {
  return (
    <div className="card custom-card" style={style}>
      {children}
      <style jsx>{`
        .custom-card {
          border-radius: 10px;
          border-color: #223741;
          padding: 10px;
          text-align: center;
        }
        `}</style>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object
}

export default Card
