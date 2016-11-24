import { Box, Flex } from 'reflexbox'
import React, { PropTypes } from 'react'

import AccountCard from './AccountCard'
import { Divider } from 'rebass'
import InfoCard from './InfoCard'
import TaskCard from './TaskCard'
import TaskCreator from './TaskCreator'

const propTypes = {
  tasks: PropTypes.array
}

function Dashboard({ tasks, ...otherProps }) {
  return (
    <div>
      <Flex wrap>
        <TaskCreator tasks={tasks} addTask={otherProps.addTask} />
        <AccountCard />
        <InfoCard />
      </Flex>
      <Flex>
        <Box col={12}>
          <h1 style={{textAlign: 'center'}}>Current Tasks</h1>
          <Divider />
        </Box>
      </Flex>
      <Flex wrap>
        {tasks.map((task, index) => {
          return (
            <TaskCard key={index} task={task} {...otherProps} />
          )
        })}
      </Flex>
    </div>
  )
}

Dashboard.propTypes = propTypes

export default Dashboard
