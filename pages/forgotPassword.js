import BackHomeButton from '../components/BackHomeButton/BackHomeButton'
import ForgotPasswordForm from '../components/ForgotPasswordForm/ForgotPasswordForm'
import Header from '../components/Header/Header'
import NavlessLayout from '../layouts/NavlessLayout/NavlessLayout'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <NavlessLayout>
    <Header title='Forgot Password' />
    <BackHomeButton />
    <ForgotPasswordForm />
  </NavlessLayout>
))
