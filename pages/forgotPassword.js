import ForgotPasswordForm from '../components/ForgotPasswordForm/ForgotPasswordForm'
import LayoutContainer from '../containers/LayoutContainer'
import withData from '../lib/withData'

export default withData(() => (
  <LayoutContainer>
    <ForgotPasswordForm />
  </LayoutContainer>
))
