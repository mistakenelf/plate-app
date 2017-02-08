import AuthRequired from '../components/AuthRequired/AuthRequired'
import Dashboard from '../components/Dashboard/Dashboard'
import Layout from '../components/Layout/Layout'
import initializePage from '../utils/initialize-page'

export default initializePage(() => (
  <Layout>
    <AuthRequired>
      <Dashboard />
    </AuthRequired>
  </Layout>
))
