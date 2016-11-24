import { Panel, PanelHeader, Text } from 'rebass'

import { Box } from 'reflexbox'
import React from 'react'

function InfoCard() {
  return (
    <Box p={2} sm={12} md={4} lg={4} col={12}>
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
    </Box>
  )
}

export default InfoCard
