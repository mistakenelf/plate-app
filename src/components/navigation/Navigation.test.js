import React from 'react'
import { render } from 'react-dom';
import Wrapper from '../wrapper/Wrapper'
import Navigation from './Navigation'

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Wrapper>
      <Navigation />
    </Wrapper>,
  div)
})
