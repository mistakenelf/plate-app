import ForgotPasswordForm from '../components/ForgotPasswordForm/ForgotPasswordForm'
import Header from '../components/Header/Header'
import LayoutNavless from '../components/Layouts/LayoutNavless'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <LayoutNavless>
    <Header title='Forgot Password' />
    <ForgotPasswordForm />
  </LayoutNavless>
))
