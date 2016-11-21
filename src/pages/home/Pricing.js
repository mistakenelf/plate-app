import { Col, Panel } from 'react-bootstrap'

import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

function Pricing() {
  return (
    <Col sm={12} md={4} lg={4} className={css(styles.promotionPadding)}>
      <Panel header={<h3>Pricing</h3>}>
        Its free, can it get any better
      </Panel>
    </Col>
  )
}

export default Pricing
