import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

export default function Breadcrumbs({ currentRoute }) {
  return (
    <div>
      <ul className="breadcrumbs">
        <li><Link href="/"><a>Home</a></Link></li>
        <li className="capitalize">
          <a href="#">{currentRoute.replace('/', '')}</a>
        </li>
      </ul>
      <style jsx>{`
        a {
          text-decoration: none;
          color: #343F53;
        }
        .capitalize:first-letter {
          text-transform: capitalize;
        }
      `}</style>
    </div>
  )
}

Breadcrumbs.propTypes = {
  currentRoute: PropTypes.string
}
