import { Button, Form, Input } from 'semantic-ui-react'
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
    <Form method='post' onSubmit={forgotPassword} size='large'>
      <ErrorMessage
        open={errorState}
        message={errorMessage}
        />
      <br />
      <Form.Field>
        <Input
          required
          fluid
          icon='user'
          iconPosition='left'
          name='email'
          placeholder='E-mail address'
          type='email'
        />
      </Form.Field>
      <Button type='submit' loading={loading} size='large' color='grey' fluid>FORGOT PASSWORD</Button>
    </Form>
  )
}

ForgotPasswordForm.propTypes = propTypes

export default ForgotPasswordForm
