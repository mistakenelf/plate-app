import { Button, Panel, PanelFooter, PanelHeader, Text } from 'rebass'
import React, { PropTypes } from 'react'

import { Box } from 'reflexbox'

const propTypes = {
  task: PropTypes.object
}

function TaskCard({ task, ...otherProps }) {
  return (
    <Box p={2} sm={12} md={4} lg={3} col={12}>
      <Panel theme='info'>
        <PanelHeader
          inverted
          theme='default'
          >
          {task.taskName}
        </PanelHeader>
        <Text>
          <h4>{task.taskDescription}</h4>
          <br />
        </Text>
        <PanelFooter>
          <Button
            type='submit'
            backgroundColor='error'
            style={{width: '100%'}}
            onClick={() => otherProps.removeTask(task.id)}
            >
          Delete
          </Button>
        </PanelFooter>
      </Panel>
    </Box>
  )
}

TaskCard.propTypes = propTypes

export default TaskCard
