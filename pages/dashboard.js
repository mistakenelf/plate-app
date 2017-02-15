import Dashboard from '../components/Dashboard/Dashboard'
import LayoutContainer from '../containers/LayoutContainer'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <LayoutContainer>
    <Dashboard />
  </LayoutContainer>
))
