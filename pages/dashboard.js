import AuthRequired from '../components/AuthRequired/AuthRequired'
import Dashboard from '../components/Dashboard/Dashboard'
import Layout from '../components/Layout/Layout'

export default () => (
  <Layout>
    <AuthRequired>
      <Dashboard />
    </AuthRequired>
  </Layout>
)
