import ContactUsContainer from '../containers/ContactUsContainer'
import React from 'react'
import { pageWithDefaultLayout } from '../hocs/page'

export default pageWithDefaultLayout(() => (
  <div>
    <ContactUsContainer />
  </div>
))
