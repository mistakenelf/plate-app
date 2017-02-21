import Header from '../components/Header/Header'
import LayoutNavless from '../components/Layouts/LayoutNavless'
import RegisterForm from '../components/RegisterForm/RegisterForm'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <LayoutNavless>
    <Header title='Register' />
    <RegisterForm />
  </LayoutNavless>
))
