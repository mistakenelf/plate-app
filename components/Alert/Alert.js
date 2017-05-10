import PropTypes from 'prop-types'
import React from 'react'

const Alert = ({ message }) => {
  return (
    <div className="alert critical animated center-text">
      {message}
      <style jsx>{`
        .center-text {
          text-align: center;
        }
      `}</style>
    </div>
  )
}

Alert.propTypes = {
  message: PropTypes.string
}

export default Alert
