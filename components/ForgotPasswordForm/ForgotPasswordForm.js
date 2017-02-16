import { Card, CardText } from 'material-ui/Card'
import { Col, Container, Row } from 'react-grid-system'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const forgotPassword = (e) => {
  e.preventDefault()
  console.log('submitted')
}

export default () => (
  <Container fluid style={{marginTop: 20}}>
    <Row>
      <Col sm={12} md={8} lg={4} offset={{ md: 2, lg: 4 }}>
        <Card>
          <CardText>
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
          </CardText>
        </Card>
      </Col>
    </Row>
  </Container>
)
