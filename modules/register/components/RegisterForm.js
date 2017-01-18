import { Button, Form, Input } from 'semantic-ui-react'
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
    <Form method='post' onSubmit={register} size='large'>
      <ErrorMessage
        open={errorState}
        message={errorMessage}
      />
      <br />
      <Form.Field>
        <Input
          required
          fluid
          icon='smile'
          iconPosition='left'
          name='firstName'
          placeholder='First Name'
          type='text'
        />
      </Form.Field>
      <Form.Field>
        <Input
          required
          fluid
          icon='thumbs outline up'
          iconPosition='left'
          name='lastName'
          placeholder='Last Name'
          type='text'
        />
      </Form.Field>
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
          placeholder='Password'
          type='password'
        />
      </Form.Field>
      <Button type='submit' size='large' loading={loading} color='grey' fluid>REGISTER</Button>
    </Form>
  )
}

RegisterForm.propTypes = propTypes

export default RegisterForm
