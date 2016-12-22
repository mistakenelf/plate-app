import React from 'react'
import RegisterForm from './RegisterForm'
import { render } from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <RegisterForm />,
    div
  )
})
