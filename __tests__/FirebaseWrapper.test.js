/* global it, expect, describe */

import FirebaseWrapper from '../components/FirebaseWrapper/FirebaseWrapper'
import Layout from '../components/Layout/Layout'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Layout>
      <FirebaseWrapper />
    </Layout>,
    div)
})

describe('FirebaseWrapper snapshot', () => {
  it('renders without crashing!"', () => {
    const component = renderer.create(
      <Layout>
        <FirebaseWrapper />
      </Layout>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
