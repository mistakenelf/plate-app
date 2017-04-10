// @flow

import { Field, reduxForm } from 'redux-form';
import { compose, graphql } from 'react-apollo';

import BorderedButton from '../../../components/BorderedButton';
import React from 'react';
import RenderTextField from '../util/RenderTextField';
import Router from 'next/router';
import { registerMutation } from '../util/mutations';
import { registerValidations } from '../util/validations';

type Props = {
  handleSubmit: Function,
  register: Function
};

const RegisterForm = ({ handleSubmit, register }: Props) => {
  const registerUser = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    register(firstName, lastName, username, password);

    Router.push('/');
  };

  return (
    <div className="container-fluid">
      <div
        className="row full-height middle-xs middle-sm middle-md middle-lg center-xs center-sm center-md center-lg"
      >
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <h1 className="header-text">Register</h1>
          <form onSubmit={handleSubmit(registerUser)}>
            <Field
              name="firstName"
              id="firstName"
              component={RenderTextField}
              type="text"
              label="First Name"
            />
            <Field
              name="lastName"
              id="lastName"
              component={RenderTextField}
              type="text"
              label="Last Name"
            />
            <Field
              name="username"
              id="username"
              component={RenderTextField}
              type="text"
              label="Username"
            />
            <Field
              name="password"
              id="password"
              component={RenderTextField}
              type="password"
              label="Password"
              style={{ marginBottom: 20 }}
            />
            <BorderedButton type="submit" label="Register" />
          </form>
        </div>
      </div>
      <style jsx>
        {
          `
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
        `
        }
      </style>
    </div>
  );
};

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
)(RegisterForm);
