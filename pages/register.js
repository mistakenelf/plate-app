import LayoutNavless from '../components/Layout/LayoutNavless'
import RegisterForm from '../components/RegisterForm/RegisterForm'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <LayoutNavless>
    <RegisterForm />
  </LayoutNavless>
))
