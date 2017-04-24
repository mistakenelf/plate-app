import HomeContainer from '../containers/HomeContainer'
import React from 'react'
import { pageWithDefaultLayout } from '../hocs/page'

const index = () => {
  return (
    <div>
      <HomeContainer />
    </div>
  )
}

export default pageWithDefaultLayout(index)
