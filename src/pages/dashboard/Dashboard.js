import { Col, Grid, Row } from 'react-bootstrap'

import AccountCard from './AccountCard'
import Divider from 'material-ui/Divider'
import InfoCard from './InfoCard'
import React from 'react'
import TaskCard from './TaskCard'
import TaskCreator from './TaskCreator'

function Dashboard({ tasks }) {
  return (
    <Grid fluid>
      <Row>
        <TaskCreator tasks={tasks} />
        <AccountCard />
        <InfoCard />
      </Row>
      <br />
      <Row>
        <Col sm={12} lg={12} md={12}>
          <Divider />
        </Col>
      </Row>
      <Row>
        {tasks.map((task, index) => {
          return (
            <TaskCard key={index} task={task} />
          )
        })}
      </Row>
    </Grid>
  )
}

export default Dashboard
