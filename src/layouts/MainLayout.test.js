import MainLayout from './MainLayout'
import React from 'react'
import TestWrapper from '../components/testWrapper/TestWrapper'
import { render } from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <MainLayout />,
    div
  )
})
