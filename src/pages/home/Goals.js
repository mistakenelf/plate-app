import { Col, Panel } from 'react-bootstrap'

import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

function Goals() {
  return (
    <Col sm={12} md={4} lg={4} className={css(styles.promotionPadding)}>
      <Panel header={<h3>Goals</h3>}>
        The greatest task manegement app ever!!!
      </Panel>
    </Col>
  )
}

export default Goals
