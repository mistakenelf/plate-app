import React from 'react'
import UnauthenticatedNav from './UnauthenticatedNav'
import { render } from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <UnauthenticatedNav />,
    div
  )
})
