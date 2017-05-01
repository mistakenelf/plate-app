import { Card, CardText } from 'material-ui/Card'
import { Field, reduxForm } from 'redux-form'
import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import Cookies from 'js-cookie'
import Link from 'next/link'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import RegisterMutation from '../../../mutations/RegisterMutation'
import RegisterValidation from '../../../validations/RegisterValidation'
import RenderRegularTextField from '../../../utils/RenderRegularTextField'
import Router from 'next/router'

class RegisterForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    register: PropTypes.func
  }

  state = {
    registerError: false
  }

  registerUser = async () => {
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const user = await this.props.register(
      firstName,
      lastName,
      username,
      password
    )

    if (user.data.register === null) {
      this.setState({
        registerError: true
      })
    } else {
      Cookies.set('token', user.data.register, {
        path: '/',
        expires: 7
      })
      Router.push('/dashboard')
    }
  }

  render() {
    const { handleSubmit } = this.props

    const errorStyle = {
      marginBottom: 10,
      backgroundColor: '#FFCDD2'
    }

    return (
      <div className="container-fluid">
        <div className="row full-height middle-xs middle-sm middle-md middle-lg center-xs center-sm center-md center-lg">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <Card style={{ padding: 20 }}>
              <h1 className="header-text">Register</h1>
              {this.state.registerError &&
                <Card style={errorStyle}>
                  <div className="error-text">
                    <CardText>
                      <b>Error:</b> Registration Error.
                    </CardText>
                  </div>
                </Card>}
              <form onSubmit={handleSubmit(this.registerUser)}>
                <Field
                  name="firstName"
                  id="firstName"
                  component={RenderRegularTextField}
                  type="text"
                  label="First Name"
                />
                <Field
                  name="lastName"
                  id="lastName"
                  component={RenderRegularTextField}
                  type="text"
                  label="Last Name"
                />
                <Field
                  name="username"
                  id="username"
                  component={RenderRegularTextField}
                  type="text"
                  label="Username"
                />
                <Field
                  name="password"
                  id="password"
                  component={RenderRegularTextField}
                  type="password"
                  label="Password"
                  style={{ marginBottom: 20 }}
                />
                <RaisedButton
                  style={{ marginBottom: 5 }}
                  label="Register"
                  primary
                  fullWidth
                  type="submit"
                />
              </form>
              <span className="login-link">
                Already have an account?
                <Link prefetch href="/login">
                  <a> Login</a>
                </Link>
              </span>
            </Card>
          </div>
        </div>
        <style jsx>
          {`
          .full-height {
            height: 90vh;
          }
          .text-field-email {
            margin-bottom: 15px;
          }
          .text-field-password {
            margin-bottom: 15px;
          }
          .header-text {
            color: black;
            margin-bottom: 40px;
          }
          .error-text {
            text-align: center;
          }
          .login-link {
            font-size: 12px;
          }
          `}
        </style>
      </div>
    )
  }
}

export default compose(
  reduxForm({
    form: 'registerForm',
    validate: RegisterValidation
  }),
  graphql(RegisterMutation, {
    props: ({ mutate }) => ({
      register: (firstName, lastName, username, password) =>
        mutate({ variables: { firstName, lastName, username, password } })
    })
  })
)(RegisterForm)
