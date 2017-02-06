/* global it, expect, describe */

import Home from '../pages/index'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Home />, div)
})

describe('Home page snapshot', () => {
  it('renders without crashing!"', () => {
    const component = renderer.create(<Home />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
