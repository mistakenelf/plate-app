import { Field, reduxForm } from 'redux-form';
import React, { PropTypes } from 'react';

import BorderedButton from '../../../components/BorderedButton';
import RenderTextField from '../util/RenderTextField';
import { forgotPasswordValidations } from '../util/validations';

const forgotPassword = e => {
  e.preventDefault();
  console.log('submitted');
};

const ForgotPasswordForm = props => {
  return (
    <div className="container-fluid">
      <div
        className="row full-height middle-xs middle-sm middle-md middle-lg center-xs center-sm center-md center-lg center-lg"
      >
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <h1 className="header-text">Forgot Password</h1>
          <form onSubmit={props.handleSubmit(forgotPassword)}>
            <div className="text-field-email">
              <Field
                name="email"
                id="email"
                component={RenderTextField}
                type="email"
                label="Email"
              />
            </div>
            <BorderedButton type="submit" label="Forgot Password" />
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

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'forgotPasswordForm',
  validate: forgotPasswordValidations
})(ForgotPasswordForm);
