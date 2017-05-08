import React, { Component } from 'react'

import About from '../views/About'
import { pageWithDefaultLayout } from '../hocs/page'

export default pageWithDefaultLayout(
  class extends Component {
    render() {
      return (
        <div className="container">
          <About />
        </div>
      )
    }
  }
)
