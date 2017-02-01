/* global it, expect, describe */

import GlobalMenu from '../components/GlobalMenu/GlobalMenu'
import Layout from '../components/Layout/Layout'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Layout>
      <GlobalMenu />
    </Layout>,
    div)
})

describe('GlobalMenu snapshot', () => {
  it('renders without crashing!"', () => {
    const component = renderer.create(
      <Layout>
        <GlobalMenu />
      </Layout>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
