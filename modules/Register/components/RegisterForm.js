import { Field, reduxForm } from 'redux-form';
import React, { PropTypes } from 'react';

import BorderedButton from '../../../components/BorderedButton';
import RenderTextField from '../util/RenderTextField';
import { registerValidations } from '../util/validations';

const register = () => {
  console.log('submitted');
};

const RegisterForm = props => {
  const { handleSubmit } = props;

  return (
    <div className="container-fluid">
      <div
        className="row full-height middle-xs middle-sm middle-md middle-lg center-xs center-sm center-md center-lg center-lg"
      >
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <h1 className="header-text">Register</h1>
          <form onSubmit={handleSubmit(register)}>
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

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'registerForm',
  validate: registerValidations
})(RegisterForm);
