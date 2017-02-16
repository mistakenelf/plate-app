import AdvertisementCards from '../components/AdvertisementCards/AdvertisementCards'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import LayoutContainer from '../containers/LayoutContainer'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <LayoutContainer>
    <Banner />
    <AdvertisementCards />
    <Footer />
  </LayoutContainer>
))
