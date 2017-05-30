import React, { Component } from 'react'

import Link from 'next/link'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { removeAccessToken } from '../../utils/cookieUtils'

export default class Navigation extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool
  }

  state = {
    loggedIn: this.props.loggedIn
  }

  logUserOut = () => {
    removeAccessToken()
    Router.push('/login')
  }

  render() {
    return (
      <span>
        <header className="sticky nav-bar shadowed">
          <label
            htmlFor="drawer-checkbox"
            className="drawer-toggle"
            style={{ marginRight: 5 }}
          />
          <Link prefetch href="/">
            <a className="logo logo-container">
              Plate
            </a>
          </Link>
          {this.state.loggedIn
            ? <span className="hidden-sm">
                <Link prefetch href="/">
                  <a className="nav-link desktop-nav-link">Home</a>
                </Link>
                <Link prefetch href="/dashboard">
                  <a className="nav-link desktop-nav-link">Dashboard</a>
                </Link>
                <Link prefetch href="/account">
                  <a className="nav-link desktop-nav-link">Account</a>
                </Link>
                <span className="nav-link">|</span>
                <a
                  className="nav-link desktop-nav-link"
                  onClick={this.logUserOut}
                >
                  Logout
                </a>
              </span>
            : <span className="hidden-sm">
                <Link prefetch href="/">
                  <a className="nav-link desktop-nav-link">Home</a>
                </Link>
                <span className="nav-link desktop-nav-link">|</span>
                <Link prefetch href="/login">
                  <a className="nav-link desktop-nav-link">Login</a>
                </Link>
                <Link prefetch href="/register">
                  <a className="nav-link desktop-nav-link">Register</a>
                </Link>
              </span>}
        </header>
        <input type="checkbox" id="drawer-checkbox" />
        <div className="drawer hidden-md hidden-lg">
          <label htmlFor="drawer-checkbox" className="close" />
          <nav style={{ border: 'none' }}>
            {this.state.loggedIn
              ? <span>
                  <Link href="/">
                    <a className="nav-link mobile-nav-link">Home</a>
                  </Link>
                  <Link href="/dashboard">
                    <a className="nav-link mobile-nav-link">Dashboard</a>
                  </Link>
                  <Link href="/account">
                    <a className="nav-link mobile-nav-link">Account</a>
                  </Link>
                  <a
                    className="nav-link mobile-nav-link"
                    onClick={this.logUserOut}
                  >
                    Logout
                  </a>
                </span>
              : <span>
                  <Link prefetch href="/">
                    <a className="nav-link mobile-nav-link">Home</a>
                  </Link>
                  <Link prefetch href="/login">
                    <a className="nav-link mobile-nav-link">Login</a>
                  </Link>
                  <Link prefetch href="/register">
                    <a className="nav-link mobile-nav-link">Register</a>
                  </Link>
                </span>}
          </nav>
        </div>
        <style jsx>{`
          .desktop-nav-link {
            color: white;
            text-decoration: none;
          }
          .mobile-nav-link {
            color: black;
            font-size: 24px;
            padding: 5px;
            margin-bottom: 5px;
          }
          .logo-container {
            margin-right: 15px;
          }
          .nav-bar {
            background: #343f53;
            display: flex;
            position: fixed;
            width: 100%;
            align-items: center;
          }
          .nav-link {
            margin-right: 10px;
            cursor: pointer;
          }
        `}</style>
      </span>
    )
  }
}
