import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import Alert from '../../../components/Alert/Alert'
import Link from 'next/link'
import LoginMutation from '../../../mutations/login'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { saveAccessToken } from '../../../utils/cookieUtils'

class LoginForm extends Component {
  static propTypes = {
    login: PropTypes.func
  }

  state = {
    loginError: false
  }

  showError = () => {
    this.setState({
      loginError: true
    })
  }

  userLogin = async (e, login) => {
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const token = await login(username, password)
    if (token.data.login === null) {
      this.showError()
    } else {
      saveAccessToken(token.data.login, { path: '/', expires: 7 })
      Router.push('/dashboard')
    }
  }

  render() {
    return (
      <form onSubmit={e => this.userLogin(e, this.props.login)}>
        <fieldset>
          <legend>Login</legend>
          <div className="input-group fluid">
            <label className="input-label" htmlFor="username">
              Username:
            </label>
            <input type="text" id="username" placeholder="username" required />
          </div>
          <div className="input-group fluid">
            <label className="input-label" htmlFor="pwd">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              required
            />
          </div>
          <div className="input-group fluid">
            <button type="submit" className="primary">Login</button>
            <button type="button">
              <Link href="/forgotpassword" prefetch>
                <a>Forgot password?</a>
              </Link>
            </button>
          </div>
          <div className="register-link">
            <Link prefetch href="/register">
              <a>Not Already A Member?</a>
            </Link>
          </div>
          {this.state.loginError && <Alert message="Error! Invalid login" />}
        </fieldset>
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
          .register-link {
            text-align: center;
          }
        `}</style>
      </form>
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
