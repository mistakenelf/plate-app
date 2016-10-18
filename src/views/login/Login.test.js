import React from 'react'
import { render } from 'react-dom';
import Wrapper from '../../components/Wrapper'
import Login from './Login'

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Wrapper>
      <Login />
    </Wrapper>,
  div)
})
