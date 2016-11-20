import { Card, CardText, CardTitle } from 'material-ui/Card'

import { Col } from 'react-bootstrap'
import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

function InfoCard() {
  return (
    <Col md={4} lg={4} className={css(styles.paddingTop)}>
      <Card>
        <CardTitle title="Schedule" subtitle="Your deadlines will be shown here" />
        <CardText>
          <h5>{Date()}</h5>
        </CardText>
      </Card>
    </Col>
  )
}

export default InfoCard
