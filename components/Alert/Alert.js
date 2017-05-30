import PropTypes from 'prop-types'
import React from 'react'

export default function Alert({ message }) {
  return (
    <div className="toast">
      {message}
    </div>
  )
}

Alert.propTypes = {
  message: PropTypes.string
}
