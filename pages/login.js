import LayoutContainer from '../containers/LayoutContainer'
import LoginForm from '../components/LoginForm/LoginForm'
import withData from '../lib/withData'

export default withData(() => (
  <LayoutContainer>
    <LoginForm />
  </LayoutContainer>
))
