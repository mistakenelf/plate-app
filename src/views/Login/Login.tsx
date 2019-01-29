import React from 'react'

import Card from '../../components/Card/Card'

import { Container, Icon, FormContainer } from './style'
import LoginForm from './components/LoginForm/LoginForm'

function Login() {
  return (
    <Container>
      <FormContainer>
        <Card title="Login" extra={<Icon>🍛</Icon>}>
          <LoginForm />
        </Card>
      </FormContainer>
    </Container>
  )
}

export default Login
