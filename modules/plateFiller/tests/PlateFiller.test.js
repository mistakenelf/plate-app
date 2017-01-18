import PlateFiller from '../PlateFiller'
import React from 'react'
import { render } from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <PlateFiller />,
    div
  )
})
