import { inject, observer } from 'mobx-react'

import { Component } from 'react'
import { Message } from 'semantic-ui-react'

export default inject('GlobalStore')(observer(class extends Component {
  render () {
    return (
      <div>
        <Message
          floating
          success
          visible={this.props.GlobalStore.registerMessage}
          hidden={this.props.GlobalStore.registerMessageHidden}
          onDismiss={this.props.GlobalStore.hideRegisterMessage}
          header={'Hello, ' + this.props.GlobalStore.displayUserName}
          content='This is your dashboard where you can add new plates.'
        />
        <h1>Dashboard</h1>
      </div>
    )
  }
}))
