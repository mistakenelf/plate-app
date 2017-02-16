import { Col, Container, Row } from 'react-grid-system'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const forgotPassword = (e) => {
  e.preventDefault()
  console.log('submitted')
}

export default () => (
  <Container fluid>
    <Row>
      <Col sm={12} md={8} lg={6} offset={{ md: 2, lg: 3 }}>
        <h3>Forgot Password</h3>
        <form onSubmit={forgotPassword}>
          <TextField hintText='email' id='email' type='text' fullWidth />
          <RaisedButton
            secondary
            fullWidth
            label='Forgot Password'
            type='submit'
          />
        </form>
      </Col>
    </Row>
  </Container>
)
