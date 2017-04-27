import BackButton from '../../components/BackButton/BackButton'
import ProfilePage from './components/ProfilePage'
import PropTypes from 'prop-types'
import React from 'react'

const Account = ({ user }) => {
  return (
    <div>
      <BackButton color="black" />
      <ProfilePage user={user} />
    </div>
  )
}

Account.propTypes = {
  user: PropTypes.object
}

export default Account
