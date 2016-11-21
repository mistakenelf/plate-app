import { Col, Panel } from 'react-bootstrap'

import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

function Features() {
  return (
    <Col sm={12} md={4} lg={4} className={css(styles.promotionPadding)}>
      <Panel header={<h3>Features</h3>}>
        Some of the greatest features ever
      </Panel>
    </Col>
  )
}

export default Features
