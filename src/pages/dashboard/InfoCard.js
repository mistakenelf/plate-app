import { Col, Panel } from 'react-bootstrap'

import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

function InfoCard() {
  return (
    <Col md={4} lg={4} className={css(styles.paddingTop)}>
      <Panel header={<h3>Schedule Info</h3>} bsStyle="primary">
        <h5>{Date()}</h5>
      </Panel>
    </Col>
  )
}

export default InfoCard
