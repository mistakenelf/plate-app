import { Button, Dimmer, Divider, Form, Icon } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react'

import { Component } from 'react'
import { auth } from '../../lib/db'

@inject('store') @observer
export default class extends Component {

  componentDidMount () {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.store.doLogin
      } else {
        this.props.store.doLogout
      }
    })
  }

  render () {
    return (
      <div>
       {this.props.children}
      </div>
    )
  }
}
