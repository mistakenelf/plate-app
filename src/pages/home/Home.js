import { Box, Flex } from 'reflexbox'

import Header from './Header'
import React from 'react'

function Home() {
  return (
    <Flex>
      <Box col={12}>
        <Header />
      </Box>
    </Flex>
  )
}

export default Home
