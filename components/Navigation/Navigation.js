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
      <span>
        <header className="sticky nav-bar shadowed">
          <label
            htmlFor="drawer-checkbox"
            className="drawer-toggle"
            style={{ marginTop: '-6px', marginRight: 5 }}
          />
          <a href="#" className="logo logo-container">
            Plate
          </a>
          {state.loggedIn
            ? <span className="hidden-sm">
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
            : <span className="hidden-sm">
                <Link prefetch href="/"><a className="nav-link">Home</a></Link>
                <span className="nav-link">|</span>
                <Link prefetch href="/login">
                  <a className="nav-link">Login</a>
                </Link>
                <Link prefetch href="/register">
                  <a className="nav-link">Register</a>
                </Link>
              </span>}
        </header>
        <input type="checkbox" id="drawer-checkbox" />
        <div className="drawer hidden-md hidden-lg">
          <label htmlFor="drawer-checkbox" className="close" />
          <nav style={{ border: 'none' }}>
            {state.loggedIn
              ? <span>
                  <Link href="/"><a className="nav-link">Home</a></Link>
                  <Link href="/dashboard">
                    <a className="nav-link">Dashboard</a>
                  </Link>
                  <Link href="/account">
                    <a className="nav-link">Account</a>
                  </Link>
                  <a
                    className="nav-link"
                    onClick={() => logUserOut(effects.logout)}
                  >
                    Logout
                  </a>
                </span>
              : <span>
                  <Link prefetch href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                  <Link prefetch href="/login">
                    <a className="nav-link">Login</a>
                  </Link>
                  <Link prefetch href="/register">
                    <a className="nav-link">Register</a>
                  </Link>
                </span>}
          </nav>
        </div>
        <style jsx>{`
          a {
            text-decoration: none;
          }
          .logo-container {
            margin-right: 15px;
          }
          .nav-bar {
            background: #343f53;
            display: flex;
            align-items: center;
          }
          .nav-link {
            margin-right: 10px;
          }
        `}</style>
      </span>
    )
  })
)

Navigation.propTypes = {
  token: PropTypes.string
}

export default Navigation
