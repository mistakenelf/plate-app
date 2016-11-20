import { Card, CardText, CardTitle } from 'material-ui/Card'

import { Col } from 'react-bootstrap'
import RaisedButton from 'material-ui/RaisedButton'
import React from 'react'
import { css } from 'aphrodite'
import { red500 } from 'material-ui/styles/colors'
import styles from './styles'

function TaskCard({ task, ...otherProps }) {
  return (
    <Col md={3} lg={3} className={css(styles.paddingTop)}>
      <Card>
        <CardTitle subtitle={task.taskName} />
        <CardText>
          {task.description}
          <br />
          <br />
          <RaisedButton
            type="button"
            backgroundColor={red500}
            labelColor="white"
            label="Delete"
            onClick={() => otherProps.removeTask(task.id)}
            fullWidth={true}
            />
        </CardText>
      </Card>
    </Col>
  )
}

export default TaskCard
