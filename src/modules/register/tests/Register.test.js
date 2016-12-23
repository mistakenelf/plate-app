import React from 'react'
import Register from '../Register'
import { render } from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Register />,
    div
  )
})
