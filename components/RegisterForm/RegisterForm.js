import { Col, Container, Row } from 'react-grid-system'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const register = (e) => {
  e.preventDefault()
  console.log('submitted')
}

export default () => (
  <Container fluid>
    <Row>
      <Col sm={12} md={8} lg={6} offset={{ md: 2, lg: 3 }}>
        <h3>Register</h3>
        <form onSubmit={register}>
          <TextField hintText='email' type='text' fullWidth />
          <TextField hintText='password' type='password' fullWidth />
          <RaisedButton
            secondary
            fullWidth
            label='Register'
            type='submit'
          />
        </form>
      </Col>
    </Row>
  </Container>
)
