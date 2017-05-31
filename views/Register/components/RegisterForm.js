import React, { Component } from 'react'

import Alert from '../../../components/Alert/Alert'
import Link from 'next/link'
import PropTypes from 'prop-types'
import RegisterMutation from '../../../mutations/register'
import Router from 'next/router'
import { graphql } from 'react-apollo'
import { saveAccessToken } from '../../../utils/cookieUtils'

class RegisterForm extends Component {
  static propTypes = {
    register: PropTypes.func
  }

  state = {
    registerError: false
  }

  showError = () => {
    this.setState({
      registerError: true
    })
  }

  registerUser = async (e, register) => {
    e.preventDefault()
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value

    const user = await register(firstName, lastName, username, password, email)

    if (user.data.register === null) {
      this.showError()
    } else {
      saveAccessToken(user.data.register, {
        path: '/',
        expires: 7
      })
      Router.push('/dashboard')
    }
  }

  render() {
    return (
      <form onSubmit={e => this.registerUser(e, register)}>
        <fieldset>
          <legend>Register</legend>
          <div className="input-group fluid">
            <label className="input-label" htmlFor="firstName">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="first name"
              required
            />
          </div>
          <div className="input-group fluid">
            <label className="input-label" htmlFor="lastName">
              Last Name:
            </label>
            <input type="text" id="lastName" placeholder="last name" required />
          </div>
          <div className="input-group fluid">
            <label className="input-label" htmlFor="email">
              Email:
            </label>
            <input type="text" id="email" placeholder="email" required />
          </div>
          <div className="input-group fluid">
            <label className="input-label" htmlFor="username">
              Username:
            </label>
            <input type="text" id="username" placeholder="username" required />
          </div>
          <div className="input-group fluid">
            <label className="input-label" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              required
            />
          </div>
          <div className="input-group fluid">
            <button type="submit" className="primary">Register</button>
            <button type="button">
              <Link href="/login" prefetch>
                <a>Already A User?</a>
              </Link>
            </button>
          </div>
          {this.state.registerError &&
            <Alert message="Error! Registration Failed" />}
        </fieldset>
        <style jsx>{`
          .input-label {
            width: 100px;
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
  }
}

export default graphql(RegisterMutation, {
  props: ({ mutate }) => ({
    register: (firstName, lastName, username, password, email) =>
      mutate({ variables: { firstName, lastName, username, password, email } })
  })
})(RegisterForm)
