import PropTypes from 'prop-types'
import React from 'react'

const Breadcrumbs = ({ currentRoute }) => {
  currentRoute = currentRoute.replace('/', '')
  return (
    <div>
      <ul className="breadcrumbs">
        <li><a href="#">Home</a></li>
        <li><a href="#">{currentRoute}</a></li>
      </ul>
      <style jsx>{`
        a {
          text-decoration: none;
          color: #343F53;
        }
        `}</style>
    </div>
  )
}

Breadcrumbs.propTypes = {
  currentRoute: PropTypes.string
}

export default Breadcrumbs
