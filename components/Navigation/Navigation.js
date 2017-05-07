import React, { Component } from 'react'

import Cookies from 'js-cookie'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Router from 'next/router'

class Navigation extends Component {
  static propTypes = {
    token: PropTypes.string
  }

  state = {
    loggedIn: this.props.token ? true : false
  }

  logout = () => {
    this.setState({
      loggedIn: false
    })

    Cookies.remove('token')
    Router.push('/login')
  }

  render() {
    return (
      <header className="fixed-nav">
        <a href="#" className="logo logo-container">
          Plate
        </a>
        {this.state.loggedIn
          ? <div>
              <Link prefetch href="/"><a className="nav-link">Home</a></Link>
              <Link prefetch href="/dashboard">
                <a className="nav-link">Dashboard</a>
              </Link>
              <Link prefetch href="/account">
                <a className="nav-link">Account</a>
              </Link>
              <a onClick={this.logout} className="nav-link">Logout</a>
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
  }
}

export default Navigation
