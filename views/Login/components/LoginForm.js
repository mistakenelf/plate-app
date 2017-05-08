import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import Card from '../../../components/Card/Card'
import Cookies from 'js-cookie'
import Link from 'next/link'
import LoginMutation from '../../../mutations/LoginMutation'
import PropTypes from 'prop-types'
import Router from 'next/router'

class LoginForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    login: PropTypes.func
  }

  state = {
    loginError: false
  }

  userLogin = async (e, login) => {
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const token = await login(username, password)
    if (token.data.login === null) {
      this.setState({
        loginError: true
      })
    } else {
      Cookies.set('token', token.data.login, { path: '/', expires: 7 })
      Router.push('/dashboard')
    }
  }

  render() {
    const { login } = this.props

    const errorStyle = {
      marginBottom: 10,
      backgroundColor: '#FFCDD2'
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
            <Card>
              <h1 className="header-text">Login</h1>
              {this.state.loginError &&
                <Card style={errorStyle}>
                  <div className="error-text">
                    <b>Error:</b> Invalid Login.
                    <Link prefetch href="/forgotpassword">
                      <a style={{ textDecoration: 'none' }}>
                        Forgot Password?
                      </a>
                    </Link>
                  </div>
                </Card>}
              <form onSubmit={e => this.userLogin(e, login)}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
                <button type="submit" className="primary full-width">
                  Login
                </button>
              </form>
              <div className="forgot-password">
                <Link prefetch href="/forgotpassword">
                  <a>Forgot Password?</a>
                </Link>
              </div>
            </Card>
          </div>
        </div>
        <style jsx>
          {`
            .full-width {
              width: 95%;
            }
            .forgot-password {
              margin-top: 15px;
            }
            .forgot-password a {
              text-decoration: none;
              font-size: 12px;
            }
            .error-text {
              text-align: center;
            }
            .header-text {
              margin-bottom: 40px;
              color: #424242
            }
          `}
        </style>
      </div>
    )
  }
}

export default compose(
  graphql(LoginMutation, {
    props: ({ mutate }) => ({
      login: (username, password) =>
        mutate({ variables: { username, password } })
    })
  })
)(LoginForm)
