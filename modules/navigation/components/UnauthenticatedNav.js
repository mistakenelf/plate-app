import { inject, observer } from 'mobx-react'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

export default inject('store')(observer(({ store }) => (
  <div>
    <AppBar
      title='Plate'
      iconElementRight={<FlatButton label='Menu' />}
      onRightIconButtonTouchTap={store.openModal}
      showMenuIconButton={false}
      style={{backgroundColor: 'white'}}
    />
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
  </div>
)))
