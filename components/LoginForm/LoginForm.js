import { Card, CardText } from 'material-ui/Card'
import { Col, Container, Row } from 'react-grid-system'

import Link from 'next/link'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const login = (e) => {
  e.preventDefault()
  console.log('submitted')
}

export default ({ messageOpen, showMessage, hideMessage }) => (
  <Container fluid style={{marginTop: 20}}>
    <Row>
      <Col xs={12} sm={12} md={12} lg={4} xl={4} offset={{ lg: 4 }}>
        <Card>
          <CardText>
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
            <Link prefetch href='/forgotPassword'><a>Forgot Password?</a></Link>
          </CardText>
        </Card>
      </Col>
    </Row>
  </Container>
)
