import Dashboard from '../components/Dashboard/Dashboard'
import LayoutContainer from '../containers/LayoutContainer'
import withData from '../lib/withData'

export default withData(() => (
  <LayoutContainer>
    <Dashboard />
  </LayoutContainer>
))
