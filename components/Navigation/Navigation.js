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
    logout: () => state => Object.assign({}, state, { loggedIn: false }),
    login: () => state => Object.assign({}, state, { loggedIn: true })
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
      <header className="fixed-nav">
        <a href="#" className="logo logo-container">
          Plate
        </a>
        {state.loggedIn
          ? <div>
              <Link prefetch href="/"><a className="nav-link">Home</a></Link>
              <Link prefetch href="/dashboard">
                <a className="nav-link">Dashboard</a>
              </Link>
              <Link prefetch href="/account">
                <a className="nav-link">Account</a>
              </Link>
              <a
                onClick={() => logUserOut(effects.logout)}
                className="nav-link"
              >
                Logout
              </a>
            </div>
          : <div>
              <Link prefetch href="/"><a className="nav-link">Home</a></Link>
              <Link prefetch href="/login">
                <a className="nav-link">Login</a>
              </Link>
              <Link prefetch href="/register">
                <a className="nav-link">Register</a>
              </Link>
            </div>}
        <style jsx>
          {`
            a {
              text-decoration: none;
            }
            .fixed-nav {
              position: fixed;
              display: flex;
              align-items: center;
              box-shadow: 0 2px 2px #343f53;
              z-index: 100;
              width: 100%;
              background: #343f53;
              color: white;
            }
            .logo-container {
              margin-right: 15px;
            }
            .nav-link {
              color: white;
              font-size: 18px;
              margin-left: 10px;
              cursor: pointer;
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
