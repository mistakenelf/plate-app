import { inject, observer } from 'mobx-react'

import { Component } from 'react'
import Router from 'next/router'
import Unauthorized from '../Unauthorized/Unauthorized'

export default inject('store')(observer(class extends Component {
  componentDidMount () {
    if (!this.props.store.loggedIn) {
      Router.push('/unauthorized')
    }
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}))
