import Header from '../components/Header/Header'
import LayoutNavless from '../components/Layouts/LayoutNavless'
import LoginForm from '../components/LoginForm/LoginForm'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <LayoutNavless>
    <Header title='Login' />
    <LoginForm />
  </LayoutNavless>
))
