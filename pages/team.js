import React, { Component } from 'react'

import MeetTheTeam from '../views/MeetTheTeam'
import { pageWithDefaultLayout } from '../hocs/page'

export default pageWithDefaultLayout(
  class extends Component {
    render() {
      return (
        <div className="container">
          <MeetTheTeam />
        </div>
      )
    }
  }
)
