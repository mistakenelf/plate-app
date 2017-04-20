import { Card, CardText } from 'material-ui/Card'
import { Field, reduxForm } from 'redux-form'
import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import BorderedButton from '../BorderedButton/BorderedButton'
import Link from 'next/link'
import PropTypes from 'prop-types'
import RenderWhiteTextField from '../../utils/RenderWhiteTextField'
import cookie from 'react-cookie'
import { loginMutation } from '../../mutations/loginMutations'
import { loginValidations } from '../../validations/loginValidations'

class LoginForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    login: PropTypes.func
  }

  state = {
    loginError: false
  }

  userLogin = async login => {
    const username = document.getElementById('username').value
    const token = await login(username)
    if (token.data.login === null) {
      this.setState({
        loginError: true
      })
    } else {
      cookie.save('token', token.data.login, { path: '/' })
      window.location.href = '/'
    }
  }

  render() {
    const { login, handleSubmit } = this.props
    const errorStyle = {
      marginBottom: 10,
      backgroundColor: '#DDFFFF',
      borderLeftStyle: 'solid',
      borderWidth: '5px',
      borderColor: '#ff3333'
    }
    return (
      <div className="container-fluid">
        <div className="row full-height middle-xs middle-sm middle-md middle-lg center-xs center-sm center-md center-lg">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <h1 className="header-text">Login</h1>
            {this.state.loginError &&
              <Card style={errorStyle}>
                <CardText>
                  <b>Error:</b> Invalid Login.
                  <Link prefetch href="/forgotpassword">
                    <a style={{ textDecoration: 'none' }}> Forgot Password?</a>
                  </Link>
                </CardText>
              </Card>}
            <form onSubmit={handleSubmit(() => this.userLogin(login))}>
              <Field
                name="username"
                id="username"
                component={RenderWhiteTextField}
                type="text"
                label="Username"
              />
              <Field
                name="password"
                id="password"
                component={RenderWhiteTextField}
                type="password"
                label="Password"
                style={{ marginBottom: 20 }}
              />
              <BorderedButton color="white" type="submit" label="Login" />
            </form>
            <div className="forgot-password">
              <Link prefetch href="/forgotpassword">
                <a>Forgot Password?</a>
              </Link>
            </div>
          </div>
        </div>
        <style jsx>
          {`
          .text-field-email {
            margin-bottom: 15px;
          }
          .text-field-password {
            margin-bottom: 15px;
          }
          .forgot-password {
            margin-top: 15px;
          }
          .forgot-password a {
            color: white;
            text-decoration: none;
          }
          .full-height {
            height: 90vh;
          }
          .header-text {
            color: white;
            margin-bottom: 50px;
          }
        `}
        </style>
      </div>
    )
  }
}

export default compose(
  reduxForm({
    form: 'loginForm',
    validate: loginValidations
  }),
  graphql(loginMutation, {
    props: ({ mutate }) => ({
      login: username => mutate({ variables: { username } })
    })
  })
)(LoginForm)
