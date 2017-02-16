import { Card, CardText, CardTitle } from 'material-ui/Card'
import { Col, Container, Row } from 'react-grid-system'

export default () => (
  <Container fluid style={{marginTop: 10}}>
    <Row>
      <Col sm={12} md={4} lg={4}>
        <Card>
          <CardTitle title='Free' />
          <CardText>Free to use and create as many plates as you want</CardText>
        </Card>
      </Col>
      <Col sm={12} md={4} lg={4}>
        <Card>
          <CardTitle title='Fast' />
          <CardText>Built on the latest technologies for speed</CardText>
        </Card>
      </Col>
      <Col sm={12} md={4} lg={4}>
        <Card>
          <CardTitle title='User Friendly' />
          <CardText>Very easy to pick up and start using right away</CardText>
        </Card>
      </Col>
    </Row>
  </Container>
)
