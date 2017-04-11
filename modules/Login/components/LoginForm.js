import { Field, reduxForm } from 'redux-form';

import BorderedButton from '../../../components/BorderedButton';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import RenderTextField from '../util/RenderTextField';
import { loginValidations } from '../util/validations';

const login = () => {
  console.log('submitted');
};

const LoginForm = ({ handleSubmit }) => {
  return (
    <div className="container-fluid">
      <div
        className="row full-height middle-xs middle-sm middle-md middle-lg center-xs center-sm center-md center-lg"
      >
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <h1 className="header-text">Login</h1>
          <form onSubmit={handleSubmit(login)}>
            <Field
              name="email"
              id="email"
              component={RenderTextField}
              type="email"
              label="Email"
            />
            <Field
              name="password"
              id="password"
              component={RenderTextField}
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
        {
          `
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
        `
        }
      </style>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'loginForm',
  validate: loginValidations
})(LoginForm);
