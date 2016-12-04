import Navigation from './Navigation'
import React from 'react'
import TestWrapper from '../TestWrapper/TestWrapper'
import { render } from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <TestWrapper>
      <Navigation />
    </TestWrapper>,
    div)
})
