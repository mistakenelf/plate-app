import AdvertisementCards from '../components/AdvertisementCards/AdvertisementCards'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'
import MainLayoutContainer from '../containers/MainLayoutContainer'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <MainLayoutContainer>
    <Header title='Home' />
    <Banner />
    <AdvertisementCards />
  </MainLayoutContainer>
))
