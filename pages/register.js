import LayoutContainer from '../containers/LayoutContainer'
import RegisterForm from '../components/RegisterForm/RegisterForm'
import withData from '../lib/withData'

export default withData(() => (
  <LayoutContainer>
    <RegisterForm />
  </LayoutContainer>
))
