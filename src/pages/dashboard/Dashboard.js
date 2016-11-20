import { Col, Grid, Row } from 'react-bootstrap'

import AccountCard from './AccountCard'
import Divider from 'material-ui/Divider'
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
        <Col sm={12} lg={12} md={12}>
          <Divider />
        </Col>
      </Row>
      <Row>
        <h1 style={{textAlign: 'center'}}>Current Tasks</h1>
        {tasks.map((task, index) => {
          return (
            <TaskCard key={index} task={task} {...otherProps}/>
          )
        })}
      </Row>
    </Grid>
  )
}

export default Dashboard
