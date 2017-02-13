import Banner from '../components/Banner/Banner'
import LayoutContainer from '../containers/LayoutContainer'
import withData from '../lib/withData'

export default withData(() => (
  <LayoutContainer>
    <Banner />
  </LayoutContainer>
))
