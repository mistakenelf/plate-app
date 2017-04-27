import React, { Component } from 'react'

import Login from '../views/Login'
import { pageWithNavlessLayout } from '../hocs/page'

export default pageWithNavlessLayout(
  class extends Component {
    render() {
      return <Login />
    }
  }
)
