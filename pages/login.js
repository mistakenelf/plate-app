import Header from '../components/Header/Header'
import LoginForm from '../components/LoginForm/LoginForm'
import NavlessLayout from '../layouts/NavlessLayout/NavlessLayout'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <NavlessLayout>
    <Header title='Login' />
    <LoginForm />
  </NavlessLayout>
))
