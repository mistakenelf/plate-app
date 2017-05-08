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
      backgroundColor: '#FFCDD2',
      width: '90%'
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
            <form onSubmit={e => this.userLogin(e, login)}>
              <fieldset>
                <legend>Login</legend>
                <div className="input-group fluid">
                  <label className="input-label" htmlFor="username">
                    Username:
                  </label>
                  <input type="text" id="username" placeholder="username" />
                </div>
                <div className="input-group fluid">
                  <label className="input-label" htmlFor="pwd">Password:</label>
                  <input type="password" id="password" placeholder="password" />
                </div>
                <div className="input-group fluid">
                  <button type="submit" className="primary">Login</button>
                  <button>
                    <Link href="/forgotpassword" prefetch>
                      <a>Forgot password?</a>
                    </Link>
                  </button>
                </div>
                {this.state.loginError &&
                  <div className="input-group fluid">
                    <Card style={errorStyle}>
                      <div>
                        <b>Error:</b> Invalid Login.
                        <Link prefetch href="/forgotpassword">
                          <a>
                            Forgot Password?
                          </a>
                        </Link>
                      </div>
                    </Card>
                  </div>}
              </fieldset>
            </form>
          </div>
        </div>
        <style jsx>{`
            .input-label {
              width: 80px;
            }
            a {
              text-decoration: none;
            }
            .error-text {
              text-align: center;
            }
          `}</style>
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
