import React, { Component } from 'react'

import Register from '../views/Register'
import { pageWithNavlessLayout } from '../hocs/page'

export default pageWithNavlessLayout(
  class extends Component {
    render() {
      return <Register />
    }
  }
)
