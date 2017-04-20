import React, { Component } from 'react'

import AccountContainer from '../containers/AccountContainer'
import Header from '../components/Header/Header'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { pageWithDefaultLayout } from '../hocs/page'

class account extends Component {
  static propTypes = {
    auth: PropTypes.object
  }

  componentDidMount() {
    if (this.props.auth.loggedIn === false) {
      Router.push('/login')
    }
  }

  render() {
    return (
      <div>
        <Header title="Account" />
        <AccountContainer />
      </div>
    )
  }
}

export default pageWithDefaultLayout(account)
