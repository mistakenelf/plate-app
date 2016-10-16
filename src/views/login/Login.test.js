import React from 'react'
import { render } from 'react-dom';
import AppWrapper from '../../components/AppWrapper'
import Login from './Login'

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <AppWrapper>
      <Login />
    </AppWrapper>,
    div)
})
