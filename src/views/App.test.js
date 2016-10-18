import React from 'react'
import { render } from 'react-dom';
import Wrapper from '../components/wrapper/Wrapper'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Wrapper>
      <App />
    </Wrapper>,
  div)
})
