import { Field, reduxForm } from "redux-form";
import React, { PropTypes } from "react";

import BorderedButton from "../../../components/BorderedButton/BorderedButton";
import TextField from "material-ui/TextField";

const forgotPassword = e => {
  e.preventDefault();
  console.log("submitted");
};

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Please enter an email";
  } else if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const RenderTextField = (
  { input, label, meta: { touched, error }, ...custom }
) => (
  <TextField
    hintStyle={{ color: "white" }}
    inputStyle={{ color: "white" }}
    hintText={label}
    autoComplete={"off"}
    errorText={touched && error}
    fullWidth
    {...input}
    {...custom}
  />
);

const ForgotPasswordForm = ({ handleSubmit }) => (
  <div className="container-fluid">
    <div
      className="row full-height middle-xs middle-sm middle-md middle-lg middle-xl center-xs center-sm center-md center-lg center-lg"
    >
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <h1 className="header-text">Forgot Password</h1>
        <form onSubmit={handleSubmit(forgotPassword)}>
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

RenderTextField.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object
};

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "forgotPasswordForm",
  validate
})(ForgotPasswordForm);
