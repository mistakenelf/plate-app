import { inject, observer } from 'mobx-react'

import { Message } from 'semantic-ui-react'

export default inject('store')(observer(({ store }) => {
  return (
    <div>
      <Message
        floating='true'
        success='true'
        visible={store.registerMessage}
        hidden={store.registerMessageHidden}
        onDismiss={store.hideRegisterMessage}
        header='Welcome to plate!'
        content='This is your dashboard where you can add new plates.'
        positioning='top center'
      />
    </div>
  )
}))
