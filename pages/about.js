import About from '../views/About'
import React from 'react'
import { pageWithDefaultLayout } from '../hocs/page'

export default pageWithDefaultLayout(function about() {
  return <About />
})
