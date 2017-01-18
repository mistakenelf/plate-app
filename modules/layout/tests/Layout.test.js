import Layout from '../Layout'
import { render } from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Layout />,
    div
  )
})
