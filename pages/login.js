import LayoutContainer from '../containers/LayoutContainer'
import LoginFormContainer from '../containers/LoginFormContainer'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <LayoutContainer>
    <LoginFormContainer />
  </LayoutContainer>
))
