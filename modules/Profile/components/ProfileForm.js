import { Field, reduxForm } from "redux-form";
import React, { PropTypes } from "react";

import BorderedButton from "../../../components/BorderedButton/BorderedButton";
import TextField from "material-ui/TextField";

const updateProfile = e => {
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

const RenderTextField = props => {
  const { input, label, meta: { touched, error }, ...custom } = props;

  return (
    <TextField
      hintText={label}
      autoComplete={"off"}
      errorText={touched && error}
      fullWidth
      {...input}
      {...custom}
    />
  );
};

const ProfileForm = props => {
  const { handleSubmit } = props;

  return (
    <div className="container">
      <form onSubmit={handleSubmit(updateProfile)}>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <Field
              name="firstName"
              id="firstName"
              component={RenderTextField}
              type="text"
              label="First Name"
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <Field
              name="lastName"
              id="lastName"
              component={RenderTextField}
              type="text"
              label="Last Name"
            />
          </div>
        </div>
        <BorderedButton type="submit" label="Forgot Password" />
      </form>
    </div>
  );
};

RenderTextField.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object
};

ProfileForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "profileForm",
  validate
})(ProfileForm);
