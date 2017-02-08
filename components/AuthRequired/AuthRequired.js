import { inject, observer } from 'mobx-react'

import Loading from '../Loading/Loading'

export default inject('AuthStore')(observer(({ AuthStore, children }) => (
  <div>
    {AuthStore.user
      ? children
      : <Loading />
    }
  </div>
)))
