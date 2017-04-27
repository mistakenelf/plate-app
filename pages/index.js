import React, { Component } from 'react'

import Home from '../views/Home'
import { pageWithDefaultLayout } from '../hocs/page'

export default pageWithDefaultLayout(
  class extends Component {
    render() {
      return <Home />
    }
  }
)
