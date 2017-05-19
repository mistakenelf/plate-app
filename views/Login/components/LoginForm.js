import { compose, graphql } from 'react-apollo'
import { injectState, provideState } from 'freactal'

import Alert from '../../../components/Alert/Alert'
import Link from 'next/link'
import LoginMutation from '../../../mutations/login'
import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'
import { saveAccessToken } from '../../../utils/cookieUtils'

const wrapComponentWithState = provideState({
  initialState: () => ({
    loginError: false
  }),
  effects: {
    showError: () => state => Object.assign({}, state, { loginError: true })
  }
})

const userLogin = async (e, login, showError) => {
  e.preventDefault()
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value

  const token = await login(username, password)
  if (token.data.login === null) {
    showError()
  } else {
    saveAccessToken(token.data.login, { path: '/', expires: 7 })
    Router.push('/dashboard')
  }
}

const LoginForm = wrapComponentWithState(
  injectState(({ state, effects, login }) => {
    return (
      <form onSubmit={e => userLogin(e, login, effects.showError)}>
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
          {state.loginError && <Alert message="Error! Invalid login" />}
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
        `}</style>
      </form>
    )
  })
)

LoginForm.propTypes = {
  login: PropTypes.func
}

export default compose(
  graphql(LoginMutation, {
    props: ({ mutate }) => ({
      login: (username, password) =>
        mutate({ variables: { username, password } })
    })
  })
)(LoginForm)
