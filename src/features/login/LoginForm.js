import { Button, Form } from 'semantic-ui-react'
import React, { PropTypes } from 'react'

import ErrorMessage from '../../components/errorMessage/ErrorMessage'

const propTypes = {
  userLogin: PropTypes.func,
  errorState: PropTypes.string,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool
}

function LoginForm({ userLogin, errorState, errorMessage, loading }) {
  return (
    <Form method='post' onSubmit={userLogin}>
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
      <Form.Field>
        <input
          id='password'
          name='password'
          placeholder='Please enter your password'
          required
          type='password'
        />
      </Form.Field>
      <Button type='submit' color='grey' loading={loading} fluid>Login</Button>
    </Form>
  )
}

LoginForm.propTypes = propTypes

export default LoginForm
