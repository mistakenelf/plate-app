import React, { Component } from 'react'

import AccountContainer from '../containers/AccountContainer'
import Header from '../components/Header/Header'
import PropTypes from 'prop-types'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import cookie from 'react-cookie'
import { pageWithDefaultLayout } from '../hocs/page'

class account extends Component {
  static propTypes = {
    auth: PropTypes.object
  }

  render() {
    if (!cookie.load('token')) {
      return (
        <div>
          <Header title="Account" />
          <Unauthorized />
        </div>
      )
    }

    return (
      <div>
        <Header title="Account" />
        <AccountContainer />
      </div>
    )
  }
}

export default pageWithDefaultLayout(account)
