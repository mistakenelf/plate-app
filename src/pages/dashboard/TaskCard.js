import { Button, Panel, PanelFooter, PanelHeader, Text } from 'rebass'
import React, { PropTypes } from 'react'

import { Col } from 'react-bootstrap'
import { css } from 'aphrodite'
import styles from './styles'

const propTypes = {
  task: PropTypes.object
}

function TaskCard({ task, ...otherProps }) {
  return (
    <Col md={3} lg={3} className={css(styles.paddingTop)}>
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
    </Col>
  )
}

TaskCard.propTypes = propTypes

export default TaskCard
