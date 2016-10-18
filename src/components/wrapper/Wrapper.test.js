import React from 'react'
import { render } from 'react-dom';
import Wrapper from './Wrapper'

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Wrapper />,
  div)
})
