import ContactUsContainer from '../containers/ContactUsContainer'
import Header from '../components/Header/Header'
import React from 'react'
import { pageWithDefaultLayout } from '../hocs/page'

export default pageWithDefaultLayout(() => (
  <div>
    <Header title="Contact" />
    <ContactUsContainer />
  </div>
))
