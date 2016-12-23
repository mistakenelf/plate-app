import { Button, Form } from 'semantic-ui-react'
import React, { PropTypes } from 'react'

import ErrorMessage from '../../../components/errorMessage/ErrorMessage'

const propTypes = {
  forgotPassword: PropTypes.func,
  errorState: PropTypes.string,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool
}

function ForgotPasswordForm({ forgotPassword, errorState, errorMessage, loading }) {
  return (
    <Form onSubmit={forgotPassword}>
      <ErrorMessage
        open={errorState}
        message={errorMessage}
        />
      <br />
      <Form.Field>
        <input
          id='email'
          name='email'
          placeholder='Please enter your email'
          required
          type='email'
        />
      </Form.Field>
      <Button type='submit' loading={loading} color='grey' fluid>Forgot Password</Button>
    </Form>
  )
}

ForgotPasswordForm.propTypes = propTypes

export default ForgotPasswordForm
