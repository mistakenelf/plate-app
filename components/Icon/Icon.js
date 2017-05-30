import PropTypes from 'prop-types'
import React from 'react'

export default function Icon({ type, ...props }) {
  return <i className={type} {...props} aria-hidden="true" />
}

Icon.propTypes = {
  type: PropTypes.string
}
