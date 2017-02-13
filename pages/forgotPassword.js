import ForgotPassword from '../components/ForgotPassword/ForgotPassword'
import LayoutContainer from '../containers/LayoutContainer'
import withData from '../lib/withData'

export default withData(() => (
  <LayoutContainer>
    <ForgotPassword />
  </LayoutContainer>
))
