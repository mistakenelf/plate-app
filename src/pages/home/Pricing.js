import React from 'react'
import { Card, CardText, CardTitle } from 'material-ui/Card'
import { Col } from 'react-bootstrap'
import { css } from 'aphrodite'
import styles from './styles'

function Pricing() {
  return (
    <Col sm={12} md={4} lg={4} className={css(styles.promotionPadding)}>
      <Card>
        <CardTitle title="Pricing" />
        <CardText>
          Its free, how much better can that be
        </CardText>
      </Card>
    </Col>
  )
}

export default Pricing
