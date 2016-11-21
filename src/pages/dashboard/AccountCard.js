import { Col, Panel } from 'react-bootstrap'

import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

function AccountCard() {
  return (
    <Col md={4} lg={4} className={css(styles.paddingTop)}>
      <Panel header={<h3>Profile Info</h3>} bsStyle="primary">
        <p>Your account info and profile information will be here</p>
      </Panel>
    </Col>
  )
}

export default AccountCard
