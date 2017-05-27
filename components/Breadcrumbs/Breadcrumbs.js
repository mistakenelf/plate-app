import PropTypes from 'prop-types'
import React from 'react'

const Breadcrumbs = ({ currentRoute }) => {
  currentRoute = currentRoute.replace('/', '')
  currentRoute = currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1)
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
