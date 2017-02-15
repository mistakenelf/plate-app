import { Col, Container, Row } from 'react-grid-system'

import Link from 'next/prefetch'
import Message from '../Message/Message'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const login = (e, showMessage) => {
  e.preventDefault()
  showMessage()
}

export default ({ messageOpen, showMessage, hideMessage }) => (
  <Container fluid>
    <Row>
      <Col sm={12} md={8} lg={6} offset={{ lg: 3}}>
        <Message message='Failed to process request' />
        <h3>Login</h3>
        <form onSubmit={(e) => login(e, showMessage)}>
          <TextField hintText='email' type='text' fullWidth />
          <TextField hintText='password' type='password' fullWidth />
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
