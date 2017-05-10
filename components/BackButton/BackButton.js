import Icon from '../Icon/Icon'
import PropTypes from 'prop-types'
import React from 'react'

const BackButton = ({ color }) => {
  return (
    <div>
      <a onClick={() => window.history.back()}>
        <Icon
          style={{ color: color, fontSize: 25, padding: 5 }}
          type="fa fa-arrow-circle-o-left"
        />
      </a>
      <style jsx>{`
        a {
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

BackButton.propTypes = {
  color: PropTypes.string
}

export default BackButton
