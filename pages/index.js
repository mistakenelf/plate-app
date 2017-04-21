import React, { Component } from 'react'

import HomeContainer from '../containers/HomeContainer'
import { pageWithDefaultLayout } from '../hocs/page'

class index extends Component {
  render() {
    return (
      <div>
        <HomeContainer />
      </div>
    )
  }
}

export default pageWithDefaultLayout(index)
