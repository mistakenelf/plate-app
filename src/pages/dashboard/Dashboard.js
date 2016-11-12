import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import AccountCard from './AccountCard'
import TasksCard from './TasksCard'

function Dashboard() {
  return (
    <Grid fluid>
      <Row>
        <TasksCard />
        <AccountCard />
      </Row>
    </Grid>
  )
}

export default Dashboard
