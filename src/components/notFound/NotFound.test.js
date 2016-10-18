import React from 'react'
import { render } from 'react-dom';
import Wrapper from '../wrapper/Wrapper'
import NotFound from './NotFound'

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Wrapper>
      <NotFound/>
    </Wrapper>,
  div)
})
