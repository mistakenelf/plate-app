import { Card, CardText } from 'material-ui/Card'
import { Field, reduxForm } from 'redux-form'
import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import BorderedButton from '../BorderedButton/BorderedButton'
import Cookies from 'js-cookie'
import PropTypes from 'prop-types'
import RegisterMutation from '../../mutations/RegisterMutation'
import RegisterValidation from '../../validations/RegisterValidation'
import RenderWhiteTextField from '../../utils/RenderWhiteTextField'

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

      window.location.href = '/dashboard'
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
                component={RenderWhiteTextField}
                type="text"
                label="First Name"
              />
              <Field
                name="lastName"
                id="lastName"
                component={RenderWhiteTextField}
                type="text"
                label="Last Name"
              />
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
              <BorderedButton color="white" type="submit" label="Register" />
            </form>
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
            color: white;
            margin-bottom: 50px;
          }
          .error-text {
            text-align: center;
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
