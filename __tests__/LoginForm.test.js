/* global it, expect, describe */

import Layout from '../components/Layout/Layout'
import LoginForm from '../components/LoginForm/LoginForm'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Layout>
      <LoginForm />
    </Layout>,
    div)
})

describe('LoginForm snapshot', () => {
  it('renders without crashing!"', () => {
    const component = renderer.create(
      <Layout>
        <LoginForm />
      </Layout>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
