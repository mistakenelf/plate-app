import Navigation from '../Navigation'
import { render } from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Navigation />,
    div
  )
})
