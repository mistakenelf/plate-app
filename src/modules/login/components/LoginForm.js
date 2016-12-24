import { Button, Form, Input } from 'semantic-ui-react'
import React, { PropTypes } from 'react'

import ErrorMessage from '../../../components/errorMessage/ErrorMessage'

const propTypes = {
  userLogin: PropTypes.func,
  errorState: PropTypes.string,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool
}

function LoginForm({ userLogin, errorState, errorMessage, loading }) {
  return (
    <Form method='post' onSubmit={userLogin} size='large'>
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
      <Form.Field>
        <Input
          required
          fluid
          icon='lock'
          iconPosition='left'
          name='password'
          placeholder='Please enter your password'
          type='password'
        />
      </Form.Field>
      <Button type='submit' size='large' color='grey' loading={loading} fluid>LOGIN</Button>
    </Form>
  )
}

LoginForm.propTypes = propTypes

export default LoginForm
