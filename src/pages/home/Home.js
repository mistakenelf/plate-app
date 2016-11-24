import { Grid, Row } from 'react-bootstrap'

import Header from './Header'
import React from 'react'

function Home() {
  return (
    <Grid fluid>
      <Row>
        <Header />
      </Row>
    </Grid>
  )
}

export default Home
