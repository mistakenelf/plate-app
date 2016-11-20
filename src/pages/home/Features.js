import { Card, CardText, CardTitle } from 'material-ui/Card'

import { Col } from 'react-bootstrap'
import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

function Features() {
  return (
    <Col sm={12} md={4} lg={4} className={css(styles.promotionPadding)}>
      <Card>
        <CardTitle title="Features" />
        <CardText>
          Some of the greatest features ever in an app
        </CardText>
      </Card>
    </Col>
  )
}

export default Features
