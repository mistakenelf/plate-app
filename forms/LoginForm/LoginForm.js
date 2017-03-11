import { Field, reduxForm } from "redux-form";

import BorderedButton from "../../components/BorderedButton/BorderedButton";
import Link from "next/link";
import React from "react";
import TextField from "material-ui/TextField";

type Props = {
  handleSubmit?: Function,
  label?: string,
  meta?: Object,
  input?: Object
};

const login = () => {
  console.log("submitted");
};

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom }: Props
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

const LoginForm = ({ handleSubmit }: Props) => (
  <div className="container-fluid">
    <div
      className="row full-height middle-xs middle-sm middle-md middle-lg middle-xl center-xs center-sm center-md center-lg center-lg"
    >
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <h1 className="header-text">Login</h1>
        <form onSubmit={handleSubmit(login)}>
          <Field
            name="email"
            component={renderTextField}
            type="email"
            label="Email"
          />
          <Field
            name="password"
            component={renderTextField}
            type="password"
            label="Password"
          />
          <BorderedButton type="submit" label="Login" />
        </form>
        <div className="forgot-password">
          <Link prefetch href="/forgotPassword">
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

export default reduxForm({
  form: "loginForm",
  validate
})(LoginForm);
