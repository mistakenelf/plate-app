import { Button, Col, FormGroup, Panel } from 'react-bootstrap'

import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

function TaskCard({ task, ...otherProps }) {
  return (
    <Col md={3} lg={3} className={css(styles.paddingTop)}>
      <Panel header={<h3>{task.taskName}</h3>}>
        <h3>{task.taskDescription}</h3>
        <FormGroup>
          <Button type="submit" bsStyle="danger" onClick={() => otherProps.removeTask(task.id)} block>Delete</Button>
        </FormGroup>
      </Panel>
    </Col>
  )
}

export default TaskCard
