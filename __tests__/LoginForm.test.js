/* global it, expect, describe */

import Login from '../pages/login'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Login />, div)
})

describe('Login snapshot', () => {
  it('renders without crashing!"', () => {
    const component = renderer.create(<Login />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
