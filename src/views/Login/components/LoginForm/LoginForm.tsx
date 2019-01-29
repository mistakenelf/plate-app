import React, { useState } from 'react'

import TextField from '../../../../components/TextField/TextField'
import Button from '../../../../components/Button/Button'

import { Form, FormField } from './style'

function LoginForm() {
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

    console.log(inputs)
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
