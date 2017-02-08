import Layout from '../components/Layout/Layout'
import LoginForm from '../components/LoginForm/LoginForm'
import initializePage from '../utils/initialize-page'

export default initializePage(() => (
  <Layout>
    <LoginForm />
  </Layout>
))
