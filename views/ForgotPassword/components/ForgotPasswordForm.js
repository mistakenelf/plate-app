import { Field, reduxForm } from 'redux-form'

import { Card } from 'material-ui/Card'
import ForgotPasswordValidation
  from '../../../validations/ForgotPasswordValidation'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import React from 'react'
import RenderRegularTextField from '../../../utils/RenderRegularTextField'

const forgotPassword = () => {
  console.log('submitted')
}

const ForgotPasswordForm = ({ handleSubmit }) => {
  return (
    <div className="container-fluid">
      <div className="row full-height middle-xs middle-sm middle-md middle-lg center-xs center-sm center-md center-lg">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <Card style={{ padding: 20 }}>
            <h1 className="header-text">Forgot Password</h1>
            <form onSubmit={handleSubmit(forgotPassword)}>
              <div className="text-field-email">
                <Field
                  name="email"
                  id="email"
                  component={RenderRegularTextField}
                  type="email"
                  label="Email"
                />
              </div>
              <RaisedButton
                style={{ marginBottom: 5 }}
                label="Forgot Password"
                primary
                fullWidth
                type="submit"
              />
            </form>
          </Card>
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
          .header-text {
            color: #424242;
            margin-bottom: 50px;
          }
        `}
      </style>
    </div>
  )
}

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'forgotPasswordForm',
  validate: ForgotPasswordValidation
})(ForgotPasswordForm)
