import { Field, reduxForm } from 'redux-form';
import React, { PropTypes } from 'react';

import BorderedButton from '../../../components/BorderedButton';
import RenderTextField from '../utils/RenderTextField';
import { profileValidations } from '../utils/validations';

const updateProfile = e => {
  e.preventDefault();
  console.log('submitted');
};

const ProfileForm = props => {
  return (
    <div className="container">
      <form onSubmit={props.handleSubmit(updateProfile)}>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <Field
              name="firstName"
              id="firstName"
              component={RenderTextField}
              type="text"
              label="First Name"
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
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

ProfileForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'profileForm',
  validate: profileValidations
})(ProfileForm);
