import { inject, observer } from 'mobx-react'

import { Component } from 'react'
import { Message } from 'semantic-ui-react'
import { auth } from '../../lib/db'

@inject('store') @observer
export default class extends Component {
  render() {
    return (
      <div>
        <Message
          floating
          success
          visible={this.props.store.registerMessage}
          hidden={this.props.store.registerMessageHidden}
          onDismiss={this.props.store.hideRegisterMessage}
          header={'Hello, ' + this.props.store.displayUserName}
          content='This is your dashboard where you can add new plates.'
        />
        <h1>Dashboard</h1>
      </div>
    )
  }
}
