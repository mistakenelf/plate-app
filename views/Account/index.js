import PageHeader from '../../components/PageHeader/PageHeader'
import ProfilePage from './components/ProfilePage'
import PropTypes from 'prop-types'
import React from 'react'

const Account = ({ user }) => {
  return (
    <div className="container">
      <PageHeader headerText="My Account" />
      <ProfilePage user={user} />
    </div>
  )
}

Account.propTypes = {
  user: PropTypes.object
}

export default Account
