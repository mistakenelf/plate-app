import UnauthenticatedNav from './components/UnauthenticatedNav'
import store from '../../stores/navigationStore'

export default () => (
  <UnauthenticatedNav store={store} />
)
