import { Button, Panel, PanelFooter, PanelHeader, Text } from 'rebass'
import React, { PropTypes } from 'react'

import { Box } from 'reflexbox'

const propTypes = {
  task: PropTypes.object
}

const styles = {
  panelTheme: {
    backgroundColor: '#3F51B5',
    color: 'white'
  },

  removeTaskButton: {
    backgroundColor: '#E91E63',
    color: 'white',
    width: '100%'
  }
}

function TaskCard({ task, ...otherProps }) {
  return (
    <Box p={2} sm={12} md={4} lg={3} col={12}>
      <Panel theme='info'>
        <PanelHeader
          style={styles.panelTheme}
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
            style={styles.removeTaskButton}
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
