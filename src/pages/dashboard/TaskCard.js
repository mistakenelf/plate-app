import { Card, CardText, CardTitle } from 'material-ui/Card'

import { Col } from 'react-bootstrap'
import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

function TaskCard({ task }) {
  return (
    <Col md={3} lg={3} className={css(styles.paddingTop)}>
      <Card>
        <CardTitle subtitle={task.taskName} />
        <CardText>
          {task.description}
        </CardText>
      </Card>
    </Col>
  )
}

export default TaskCard
