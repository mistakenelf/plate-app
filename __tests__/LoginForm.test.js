/* global it, expect, describe */

import LoginForm from '../components/LoginForm/LoginForm'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<LoginForm />, div)
})

describe('Login snapshot', () => {
  it('renders without crashing!"', () => {
    const component = renderer.create(<LoginForm />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
