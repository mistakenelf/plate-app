import BackButton from '../components/BackButton/BackButton'
import ProfilePage from '../components/Account/ProfilePage'
import PropTypes from 'prop-types'
import React from 'react'

const AccountContainer = ({ user }) => {
  return (
    <div>
      <BackButton color="black" />
      <ProfilePage user={user} />
    </div>
  )
}

AccountContainer.propTypes = {
  user: PropTypes.object
}

export default AccountContainer
