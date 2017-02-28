import Header from '../components/Header/Header'
import NavlessLayout from '../layouts/NavlessLayout/NavlessLayout'
import RegisterForm from '../components/RegisterForm/RegisterForm'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <NavlessLayout>
    <Header title='Register' />
    <RegisterForm />
  </NavlessLayout>
))
