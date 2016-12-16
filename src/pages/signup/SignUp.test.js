import React from 'react'
import SignUp from './SignUp'
import { render } from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <SignUp />,
    div
  )
})
