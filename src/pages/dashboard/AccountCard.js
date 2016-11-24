import { Panel, PanelHeader, Text } from 'rebass'

import { Box } from 'reflexbox'
import React from 'react'

const styles = {
  panelTheme: {
    backgroundColor: '#3F51B5',
    color: 'white'
  }
}

function AccountCard() {
  return (
    <Box p={2} sm={12} md={4} lg={4} col={12}>
      <Panel theme='info'>
        <PanelHeader
          style={styles.panelTheme}
          inverted
          theme='default'
          >
          Profile/Account
        </PanelHeader>
        <Text>
          Your profile and account info will appear here
        </Text>
      </Panel>
    </Box>
  )
}

export default AccountCard
