import AdvertisementCards from '../components/AdvertisementCards/AdvertisementCards'
import Banner from '../components/Banner/Banner'
import LayoutContainer from '../containers/LayoutContainer'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator(() => (
  <LayoutContainer>
    <Banner />
    <AdvertisementCards />
  </LayoutContainer>
))
