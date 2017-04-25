import AccountContainer from '../containers/AccountContainer'
import Cookies from 'js-cookie'
import PropTypes from 'prop-types'
import React from 'react'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import { pageWithUserData } from '../hocs/page'

const account = ({ getUserProfile }) => {
  if (getUserProfile === null) {
    return (
      <div>
        <Unauthorized />
      </div>
    )
  }

  if (!Cookies.get('token')) {
    return (
      <div>
        <Unauthorized />
      </div>
    )
  }
  return (
    <div>
      <AccountContainer />
    </div>
  )
}

account.propTypes = {
  getUserProfile: PropTypes.object
}

export default pageWithUserData(account)
