/* global it, expect, describe */

import Layout from '../components/Layout/Layout'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Layout />, div)
})

describe('Layout snapshot', () => {
  it('renders without crashing!"', () => {
    const component = renderer.create(<Layout />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
