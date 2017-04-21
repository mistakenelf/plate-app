import { Field, reduxForm } from 'redux-form'
import { compose, graphql } from 'react-apollo'

import BorderedButton from '../BorderedButton/BorderedButton'
import PropTypes from 'prop-types'
import React from 'react'
import RenderWhiteTextField from '../../utils/RenderWhiteTextField'
import cookie from 'react-cookie'
import { registerMutation } from '../../mutations/registerMutations'
import { registerValidations } from '../../validations/registerValidations'

const RegisterForm = ({ handleSubmit, register }) => {
  const registerUser = async () => {
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const user = await register(firstName, lastName, username, password)

    if (user.data.register === null) {
      alert('Registration error')
    } else {
      cookie.save('token', user.data.register, { path: '/' })
      window.location.href = '/'
    }
  }

  return (
    <div className="container-fluid">
      <div className="row full-height middle-xs middle-sm middle-md middle-lg center-xs center-sm center-md center-lg">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <h1 className="header-text">Register</h1>
          <form onSubmit={handleSubmit(registerUser)}>
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
          `}
      </style>
    </div>
  )
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
  register: PropTypes.func
}

export default compose(
  reduxForm({
    form: 'registerForm',
    validate: registerValidations
  }),
  graphql(registerMutation, {
    props: ({ mutate }) => ({
      register: (firstName, lastName, username, password) =>
        mutate({ variables: { firstName, lastName, username, password } })
    })
  })
)(RegisterForm)
