import React from 'react'
import { render } from 'react-dom';
import Wrapper from '../../components/Wrapper'
import Register from './Register'

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Wrapper>
      <Register/>
    </Wrapper>,
  div)
})
