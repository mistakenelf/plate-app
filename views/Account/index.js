import AccountInfo from './components/AccountInfo'
import ChangePassword from './components/ChangePassword'
import PageHeader from '../../components/PageHeader/PageHeader'
import ProfilePage from './components/ProfilePage'
import PropTypes from 'prop-types'
import React from 'react'
import RemovedPlates from './components/RemovedPlates'

const Account = ({ user }) => {
  return (
    <div className="container">
      <PageHeader headerText="My Account" />
      <div className="row">
        <ChangePassword user={user} />
        <ProfilePage user={user} />
        <RemovedPlates user={user} />
      </div>
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
