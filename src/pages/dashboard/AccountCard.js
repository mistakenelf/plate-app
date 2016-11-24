import { Panel, PanelHeader, Text } from 'rebass'

import { Col } from 'react-bootstrap'
import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

function AccountCard() {
  return (
    <Col md={4} lg={4} className={css(styles.paddingTop)}>
      <Panel theme='info'>
        <PanelHeader
          inverted
          theme='default'
          >
          Profile/Account
        </PanelHeader>
        <Text>
          Your profile and account info will appear here
        </Text>
      </Panel>
    </Col>
  )
}

export default AccountCard
