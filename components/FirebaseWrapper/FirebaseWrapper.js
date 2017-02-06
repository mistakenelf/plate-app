import { inject, observer } from 'mobx-react'

import { Component } from 'react'
import { auth } from '../../lib/db'

export default inject('store')(observer(class extends Component {
  componentDidMount () {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.store.loggedIn = true
      } else {
        this.props.store.loggedIn = false
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
}))
