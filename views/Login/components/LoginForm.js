import { compose, graphql } from 'react-apollo'
import { injectState, provideState } from 'freactal'

import Alert from '../../../components/Alert/Alert'
import Cookies from 'js-cookie'
import Link from 'next/link'
import LoginMutation from '../../../mutations/LoginMutation'
import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'

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
    Cookies.set('token', token.data.login, { path: '/', expires: 7 })
    Router.push('/dashboard')
  }
}

const LoginForm = wrapComponentWithState(
  injectState(({ state, effects, login }) => {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
            <form onSubmit={e => userLogin(e, login, effects.showError)}>
              <fieldset>
                <legend>Login</legend>
                <div className="input-group fluid">
                  <label className="input-label" htmlFor="username">
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="username"
                    required
                  />
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
