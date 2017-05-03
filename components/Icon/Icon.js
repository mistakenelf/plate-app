import PropTypes from 'prop-types'
import React from 'react'

const Icon = ({ type, ...props }) => {
  return <i className={type} {...props} aria-hidden="true" />
}

Icon.propTypes = {
  type: PropTypes.string
}

export default Icon
