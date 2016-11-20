import Home from './Home'
import React from 'react'
import TestWrapper from '../../components/testWrapper/TestWrapper'
import { render } from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <TestWrapper>
      <Home />
    </TestWrapper>,
    div)
})
