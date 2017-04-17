import BackButton from '../components/BackButton/BackButton'
import ProfilePage from '../components/Account/ProfilePage'
import React from 'react'

const AccountContainer = () => {
  return (
    <div>
      <BackButton color="black" />
      <ProfilePage />
    </div>
  )
}

export default AccountContainer
