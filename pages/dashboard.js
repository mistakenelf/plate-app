import DashboardContainer from '../containers/DashboardContainer'
import Header from '../components/Header/Header'
import MainLayoutContainer from '../containers/MainLayoutContainer'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <MainLayoutContainer>
    <Header title='Dashboard' />
    <DashboardContainer />
  </MainLayoutContainer>
))
