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
        <div className="col-sm-12 col-md-12 col-lg-6">
          <ChangePassword user={user} />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <ProfilePage user={user} />
        </div>
      </div>
      <div className="divider" />
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <AccountInfo user={user} />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <RemovedPlates />
        </div>
      </div>
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
