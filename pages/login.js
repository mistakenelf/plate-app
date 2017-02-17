import LayoutNavless from '../components/Layout/LayoutNavless'
import LoginFormContainer from '../containers/LoginFormContainer'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <LayoutNavless>
    <LoginFormContainer />
  </LayoutNavless>
))
