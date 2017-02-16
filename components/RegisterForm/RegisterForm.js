import { Card, CardText } from 'material-ui/Card'
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
      <Col sm={12} md={8} lg={4} offset={{ md: 2, lg: 4 }}>
        <Card>
          <CardText>
            <h3>Register</h3>
            <form onSubmit={register}>
              <TextField hintText='email' id='email' type='text' fullWidth />
              <TextField hintText='password' id='password' type='password' fullWidth />
              <RaisedButton
                secondary
                fullWidth
                label='Register'
                type='submit'
              />
            </form>
          </CardText>
        </Card>
      </Col>
    </Row>
  </Container>
)
