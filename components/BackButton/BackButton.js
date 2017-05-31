import ArrowLeft from 'react-icons/lib/ti/arrow-left-outline'
import PropTypes from 'prop-types'
import React from 'react'

export default function BackButton({ color }) {
  return (
    <div>
      <a onClick={() => window.history.back()}>
        <ArrowLeft style={{ color: color, fontSize: 25, padding: 5 }} />
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
