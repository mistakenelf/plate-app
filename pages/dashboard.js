import Dashboard from '../views/Dashboard'
import React from 'react'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import { pageWithUserData } from '../hocs/page'

export default pageWithUserData(function dashboard({
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
  return <Dashboard user={getUserProfile} url={url.pathname} />
})
