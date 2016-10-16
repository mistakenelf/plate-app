import React from 'react'
import { render } from 'react-dom';
import AppWrapper from '../../components/AppWrapper'
import Register from './Register'

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <AppWrapper>
      <Register/>
    </AppWrapper>,
    div)
})
