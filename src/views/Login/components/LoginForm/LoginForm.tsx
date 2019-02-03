import React, { useState } from 'react'
import { RouteComponentProps, RouteChildrenProps } from 'react-router'

import TextField from '../../../../components/TextField/TextField'
import Button from '../../../../components/Button/Button'

import { Form, FormField } from './style'

interface LoginFormProps extends Partial<RouteComponentProps> {
  history: any
}

function LoginForm({ history }: LoginFormProps) {
  const [inputs, setFieldValue] = useState({ email: '', password: '' })
  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFieldValue({ ...inputs, [name]: value })
  }

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    setTouchedFields({ ...touchedFields, [name]: true })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputs.email !== '' || inputs.password !== '') {
      history.push('/dashboard')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <TextField
          type="email"
          name="email"
          label="Email"
          placeholder="Whats your email?"
          value={inputs.email}
          hasError={touchedFields.email && inputs.email === ''}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormField>
      <FormField>
        <TextField
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          value={inputs.password}
          hasError={touchedFields.password && inputs.password === ''}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormField>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default LoginForm
