import { Box, Flex } from 'reflexbox'
import { Panel, PanelHeader, Text } from 'rebass'

import React from 'react'

function NotFound() {
  return (
    <Flex justify='center'>
      <Box p={2} sm={12} md={6} lg={4}>
        <Panel theme='info'>
          <PanelHeader
            inverted
            theme='error'
            >
            Page Not Found
          </PanelHeader>
          <Text>
            The page you are looking for has either been moved, or does
            not exist anymore. Please contact your administrator if you
            think this is an error. Thanks, Plate Team.
          </Text>
        </Panel>
      </Box>
    </Flex>
  )
}

export default NotFound



