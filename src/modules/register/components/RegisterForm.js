import { Button, Form } from 'semantic-ui-react'
import React, { PropTypes } from 'react'

import ErrorMessage from '../../../components/errorMessage/ErrorMessage'

const propTypes = {
  register: PropTypes.func,
  errorState: PropTypes.string,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool
}

function RegisterForm({ register, errorState, errorMessage, loading }) {
  return (
    <Form onSubmit={register}>
      <ErrorMessage
        open={errorState}
        message={errorMessage}
      />
      <br />
      <Form.Field>
        <input
          id='firstName'
          name='firstName'
          placeholder='Please enter your first name'
          required
          type='text'
        />
      </Form.Field>
      <Form.Field>
        <input
          id='lastName'
          name='lastName'
          placeholder='Please enter your last name'
          required
          type='text'
        />
      </Form.Field>
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
      <Button type='submit' loading={loading} color='grey' fluid>Sign Up</Button>
    </Form>
  )
}

RegisterForm.propTypes = propTypes

export default RegisterForm
