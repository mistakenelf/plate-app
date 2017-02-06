/* global it, expect, describe */

import Banner from '../components/Banner/Banner'
import Layout from '../components/Layout/Layout'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Layout>
      <Banner />
    </Layout>,
    div)
})

describe('Banner snapshot', () => {
  it('renders without crashing!"', () => {
    const component = renderer.create(
      <Layout>
        <Banner />
      </Layout>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
