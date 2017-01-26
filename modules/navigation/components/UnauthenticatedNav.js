import { inject, observer } from 'mobx-react'

import AppBar from 'material-ui/AppBar'

export default inject('store')(observer(({ store }) => (
  <div>
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
    <AppBar
      title='Plate'
      onLeftIconButtonTouchTap={store.openModal}
      style={{backgroundColor: 'white'}}
    />
  </div>
)))
