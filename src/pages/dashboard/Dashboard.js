import { Col, Grid, Row } from 'react-bootstrap'
import React, { PropTypes } from 'react'

import AccountCard from './AccountCard'
import { Divider } from 'rebass'
import InfoCard from './InfoCard'
import TaskCard from './TaskCard'
import TaskCreator from './TaskCreator'

const propTypes = {
  tasks: PropTypes.array,
}

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
          <h1 style={{textAlign: 'center'}}>Current Tasks</h1>
          <Divider />
        </Col>
        {tasks.map((task, index) => {
          return (
            <TaskCard key={index} task={task} {...otherProps} />
          )
        })}
      </Row>
    </Grid>
  )
}

Dashboard.propTypes = propTypes

export default Dashboard
