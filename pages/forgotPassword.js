import ForgotPasswordForm from '../components/ForgotPasswordForm/ForgotPasswordForm'
import LayoutContainer from '../containers/LayoutContainer'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <LayoutContainer>
    <ForgotPasswordForm />
  </LayoutContainer>
))
