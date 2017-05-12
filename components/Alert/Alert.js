import PropTypes from 'prop-types'
import React from 'react'

const Alert = ({ message }) => {
  return (
    <div className="toast">
      {message}
    </div>
  )
}

Alert.propTypes = {
  message: PropTypes.string
}

export default Alert
