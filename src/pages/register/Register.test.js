import React from 'react'
import Register from './Register'
import TestWrapper from '../../components/testWrapper/TestWrapper'
import { render } from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <TestWrapper>
      <Register />
    </TestWrapper>,
    div)
})
