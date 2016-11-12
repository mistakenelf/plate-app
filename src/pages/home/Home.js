import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import Header from './Header'
import Goals from './Goals'
import Features from './Features'
import Pricing from './Pricing'
import Footer from './Footer'

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
      <Row>
        <Footer />
      </Row>
    </Grid>
  )
}

export default Home
