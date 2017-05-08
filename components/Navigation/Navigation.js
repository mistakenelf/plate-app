import { injectState, provideState } from 'freactal'

import Cookies from 'js-cookie'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'

const wrapComponentWithState = provideState({
  initialState: props => ({
    loggedIn: props.token ? true : false
  }),
  effects: {
    logout: () => state => Object.assign({}, state, { loggedIn: false })
  }
})

const logUserOut = logout => {
  logout()

  Cookies.remove('token')
  Router.push('/login')
}

const Navigation = wrapComponentWithState(
  injectState(({ state, effects }) => {
    return (
      <header className="sticky nav-bar">
        <a href="#" className="logo logo-container">
          Plate
        </a>
        {state.loggedIn
          ? <span>
              <Link href="/"><a className="nav-link">Home</a></Link>
              <Link href="/dashboard">
                <a className="nav-link">Dashboard</a>
              </Link>
              <Link href="/account"><a className="nav-link">Account</a></Link>
              <span className="nav-link">|</span>
              <a
                className="nav-link"
                onClick={() => logUserOut(effects.logout)}
              >
                Logout
              </a>
            </span>
          : <span>
              <Link href="/"><a className="nav-link">Home</a></Link>
              <span className="nav-link">|</span>
              <Link href="/login"><a className="nav-link">Login</a></Link>
              <Link href="/register"><a className="nav-link">Register</a></Link>
            </span>}
        <style jsx>
          {`
            a {
              text-decoration: none;
              color: white;
            }
            .logo-container {
              margin-right: 15px;
            }
            .nav-bar {
              box-shadow: 0 2px 2px #343f53;
              background: #343f53;
            }
            .nav-link {
              margin-right: 10px;
            }
          `}
        </style>
      </header>
    )
  })
)

Navigation.propTypes = {
  token: PropTypes.string
}

export default Navigation
