import React, { Component } from 'react'

import ContactUs from '../views/ContactUs'
import { pageWithDefaultLayout } from '../hocs/page'

export default pageWithDefaultLayout(
  class extends Component {
    render() {
      return (
        <div className="container">
          <ContactUs />
        </div>
      )
    }
  }
)
