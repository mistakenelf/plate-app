import { Col, Container, Row } from 'react-grid-system'

import Link from 'next/prefetch'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const login = (e) => {
  e.preventDefault()
  console.log('submitted')
}

export default ({ messageOpen, showMessage, hideMessage }) => (
  <Container fluid>
    <Row>
      <Col sm={12} md={8} lg={6} offset={{ md: 2, lg: 3 }}>
        <h3>Login</h3>
        <form onSubmit={login}>
          <TextField hintText='email' id='email' type='text' fullWidth />
          <TextField hintText='password' id='password' type='password' fullWidth />
          <RaisedButton
            secondary
            fullWidth
            label='Login'
            type='submit'
          />
        </form>
        <Link href='/forgotPassword'><a>Forgot Password?</a></Link>
      </Col>
    </Row>
  </Container>
)
