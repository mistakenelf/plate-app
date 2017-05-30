import Account from '../views/Account'
import React from 'react'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import { pageWithUserData } from '../hocs/page'

export default pageWithUserData(function account({
  url,
  getUserProfile,
  ...props
}) {
  if (!props.token) {
    return (
      <div>
        <Unauthorized />
      </div>
    )
  }
  return <Account user={getUserProfile} url={url} />
})
