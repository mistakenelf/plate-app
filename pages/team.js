import MeetTheTeam from '../views/MeetTheTeam'
import React from 'react'
import { pageWithDefaultLayout } from '../hocs/page'

export default pageWithDefaultLayout(function team() {
  return <MeetTheTeam />
})
