import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Card from '../../components/Card/Card'

import { Container, Icon, FormContainer } from './style'
import LoginForm from './components/LoginForm/LoginForm'

function Login({ history }: RouteComponentProps) {
  return (
    <Container>
      <FormContainer>
        <Card title="Login" extra={<Icon>🍛</Icon>}>
          <LoginForm history={history} />
        </Card>
      </FormContainer>
    </Container>
  )
}

export default Login
