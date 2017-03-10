import { Field, reduxForm } from "redux-form";

import BorderedButton from "../../components/BorderedButton/BorderedButton";
import Link from "next/link";
import React from "react";
import TextField from "material-ui/TextField";

const login = () => {
  console.log("submitted");
};

type Props = {
  handleSubmit?: Function
};

const LoginForm = ({ handleSubmit }: Props) => (
  <div className="container-fluid">
    <div
      className="row full-height middle-xs middle-sm middle-md middle-lg middle-xl center-xs center-sm center-md center-lg center-lg"
    >
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <h1 className="header-text">Login</h1>
        <form onSubmit={handleSubmit(login)}>
          <div className="text-field-email">
            <TextField
              hintStyle={{ color: "white" }}
              inputStyle={{ color: "white" }}
              autoComplete={"off"}
              id="email"
              fullWidth
              required
            >
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
              />
            </TextField>
          </div>
          <div className="text-field-password">
            <TextField
              autoComplete={"off"}
              inputStyle={{ color: "white" }}
              hintStyle={{ color: "white" }}
              id="password"
              fullWidth
              required
            >
              <Field
                name="password"
                component="input"
                type="password"
                placeholder="Password"
              />
            </TextField>
          </div>
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
  form: "loginForm"
})(LoginForm);
