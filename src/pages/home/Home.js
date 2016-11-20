import { Grid, Row } from 'react-bootstrap'

import Features from './Features'
import Goals from './Goals'
import Header from './Header'
import Pricing from './Pricing'
import React from 'react'

function Home() {
  return (
    <Grid fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Goals />
        <Features />
        <Pricing />
      </Row>
    </Grid>
  )
}

export default Home
