/* global it, expect, describe */

import Dashboard from '../components/Dashboard/Dashboard'
import Layout from '../components/Layout/Layout'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Layout>
      <Dashboard />
    </Layout>,
    div)
})

describe('Dashboard snapshot', () => {
  it('renders without crashing!"', () => {
    const component = renderer.create(
      <Layout>
        <Dashboard />
      </Layout>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
