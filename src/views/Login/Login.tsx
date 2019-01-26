import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './style'

export function Login() {
  return (
    <Container>
      <Link to="/dashboard" style={{ color: 'white' }}>
        Dashboard
      </Link>
    </Container>
  )
}
