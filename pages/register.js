import LayoutContainer from '../containers/LayoutContainer'
import Register from '../components/Register/Register'
import withData from '../lib/withData'

export default withData(() => (
  <LayoutContainer>
    <Register />
  </LayoutContainer>
))
