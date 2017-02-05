import { inject, observer } from 'mobx-react'

import { Component } from 'react'
import { Message } from 'semantic-ui-react'
import ReactTextEditor from 'react-text-editor'
import { auth } from '../../lib/db'

@inject('store') @observer
export default class extends Component {
  componentDidMount() {
    this.props.store.displayUserName = auth.currentUser.displayName
  }

  render() {
    return (
      <div>
        <Message
          floating='true'
          success='true'
          visible={this.props.store.registerMessage}
          hidden={this.props.store.registerMessageHidden}
          onDismiss={this.props.store.hideRegisterMessage}
          header={'Hello, ' + this.props.store.displayUserName}
          content='This is your dashboard where you can add new plates.'
          positioning='top center'
        />
        <ReactTextEditor />
      </div>
    )
  }
}
