import { inject, observer } from 'mobx-react'

import ErrorScreen from '../ErrorScreen/ErrorScreen'

export default inject('store')(observer(({ store, children }) => (
  <div>
    {store.loggedIn
      ? children
      : <ErrorScreen />
    }
  </div>
)))
