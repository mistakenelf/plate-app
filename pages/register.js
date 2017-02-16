import LayoutContainer from '../containers/LayoutContainer'
import RegisterForm from '../components/RegisterForm/RegisterForm'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <LayoutContainer>
    <RegisterForm />
  </LayoutContainer>
))
