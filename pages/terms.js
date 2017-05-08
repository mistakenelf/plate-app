import React, { Component } from 'react'

import TermsAndConditions from '../views/TermsAndConditions'
import { pageWithDefaultLayout } from '../hocs/page'

export default pageWithDefaultLayout(
  class extends Component {
    render() {
      return (
        <div className="container">
          <TermsAndConditions />
        </div>
      )
    }
  }
)
