import { inject, observer } from 'mobx-react'

import ErrorScreen from '../ErrorScreen/ErrorScreen'

export default inject('GlobalStore')(observer(({ GlobalStore, children }) => (
  <div>
    {GlobalStore.loggedIn
      ? children
      : <ErrorScreen />
    }
  </div>
)))
