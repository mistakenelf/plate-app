import LayoutContainer from '../containers/LayoutContainer'
import LoginFormContainer from '../containers/LoginFormContainer'
import withData from '../lib/withData'

export default withData(() => (
  <LayoutContainer>
    <LoginFormContainer />
  </LayoutContainer>
))
