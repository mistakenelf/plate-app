import React from 'react'

import Card from '../../components/Card/Card'

import { Container } from './style'
import LoginForm from './components/LoginForm'

function Login() {
  return (
    <Container>
      <Card title="Login">
        <LoginForm />
      </Card>
    </Container>
  )
}

export default Login
