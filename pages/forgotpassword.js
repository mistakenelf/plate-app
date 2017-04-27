import React, { Component } from 'react'

import ForgotPassword from '../views/ForgotPassword'
import { pageWithNavlessLayout } from '../hocs/page'

export default pageWithNavlessLayout(
  class extends Component {
    render() {
      return <ForgotPassword />
    }
  }
)
