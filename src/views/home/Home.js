import React from 'react'
import { Grid, Cell } from 'radium-grid'

function Home() {
  return (
    <Grid cellWidth="1/4">
      <Cell align="center">
        <p>Lorem</p>
      </Cell>
      <Cell align="center">
        <p>ipsum</p>
      </Cell>
      <Cell align="center">
        <p>dolor</p>
      </Cell>
      <Cell align="center">
        <p>sit</p>
      </Cell>
    </Grid>
  )
}

export default Home
