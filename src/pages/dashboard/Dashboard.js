import { Col, Grid, Row, Well } from 'react-bootstrap'

import AccountCard from './AccountCard'
import InfoCard from './InfoCard'
import React from 'react'
import TaskCard from './TaskCard'
import TaskCreator from './TaskCreator'

function Dashboard({ tasks, ...otherProps }) {
  return (
    <Grid fluid>
      <Row>
        <TaskCreator tasks={tasks} addTask={otherProps.addTask} />
        <AccountCard />
        <InfoCard />
      </Row>
      <br />
      <Row>
        <Col sm={12}>
          <Well bsSize="small" style={{ fontSize: "40px", textAlign: "center" }}>
            Current Tasks
          </Well>
          {tasks.map((task, index) => {
            return (
              <TaskCard key={index} task={task} {...otherProps} />
            )
          })}
        </Col>
      </Row>
    </Grid>
  )
}

export default Dashboard
