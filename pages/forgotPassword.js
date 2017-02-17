import ForgotPasswordForm from '../components/ForgotPasswordForm/ForgotPasswordForm'
import LayoutNavless from '../components/Layout/LayoutNavless'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <LayoutNavless>
    <ForgotPasswordForm />
  </LayoutNavless>
))
