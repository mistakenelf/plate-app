import { Box, Flex } from 'reflexbox'
import React, { PropTypes } from 'react'

import AccountCard from './AccountCard'
import CreatePlate from './CreatePlate'
import { Divider } from 'rebass'
import InfoCard from './InfoCard'
import Plate from './Plate'

const propTypes = {
  plates: PropTypes.array
}

function Dashboard({ plates, ...otherProps }) {
  console.log(plates)
  return (
    <div>
      <Flex wrap>
        <CreatePlate plates={plates} addPlate={otherProps.addPlate} />
        <AccountCard />
        <InfoCard />
      </Flex>
      <Flex>
        <Box col={12}>
          <h1 style={{textAlign: 'center'}}>Current Plates</h1>
          <Divider />
        </Box>
      </Flex>
      <Flex wrap>
        {plates.map((plate, index) => {
          return (
            <Plate key={index} plate={plate} {...otherProps} />
          )
        })}
      </Flex>
    </div>
  )
}

Dashboard.propTypes = propTypes

export default Dashboard
