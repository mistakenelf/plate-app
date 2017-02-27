import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'
import HomeDetails from '../components/HomeDetails/HomeDetails'
import MainLayoutContainer from '../containers/MainLayoutContainer'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <MainLayoutContainer>
    <Header title='Home' />
    <Banner />
    <HomeDetails />
  </MainLayoutContainer>
))
