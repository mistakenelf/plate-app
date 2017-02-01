/* global it, expect, describe */

import Dashboard from '../pages/dashboard'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Dashboard />, div)
})

describe('Dashboard snapshot', () => {
  it('renders without crashing!"', () => {
    const component = renderer.create(<Dashboard />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
