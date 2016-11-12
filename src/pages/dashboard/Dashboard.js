import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import AccountCard from './AccountCard'
import TasksCard from './TasksCard'

function Dashboard({tasks}) {
  return (
    <Grid fluid>
      <Row>
        <TasksCard tasks={tasks}/>
        <AccountCard />
      </Row>
    </Grid>
  )
}

export default Dashboard
