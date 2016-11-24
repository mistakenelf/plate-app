import { Panel, PanelHeader, Text } from 'rebass'

import { Col } from 'react-bootstrap'
import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

function InfoCard() {
  return (
    <Col md={4} lg={4} className={css(styles.paddingTop)}>
      <Panel theme='info'>
        <PanelHeader
          inverted
          theme='default'
          >
          Schedule
        </PanelHeader>
        <Text>
          {Date()}
        </Text>
      </Panel>
    </Col>
  )
}

export default InfoCard
