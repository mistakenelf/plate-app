import AccountInfo from './components/AccountInfo'
import PageHeader from '../../components/PageHeader/PageHeader'
import ProfilePage from './components/ProfilePage'
import PropTypes from 'prop-types'
import React from 'react'

const Account = ({ user }) => {
  return (
    <div className="container">
      <PageHeader headerText="My Account" />
      <ProfilePage user={user} />
      <div className="divider" />
      <AccountInfo user={user} />
      <style jsx>{`
        .divider {
          margin-top: 40px;
          margin-bottom: 40px;
        }
      `}</style>
    </div>
  )
}

Account.propTypes = {
  user: PropTypes.object
}

export default Account
