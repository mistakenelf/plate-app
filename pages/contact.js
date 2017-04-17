import ContactUsContainer from '../containers/ContactUsContainer'
import Header from '../components/Header/Header'
import React from 'react'
import page from '../hocs/page'

export default page(() => (
  <div>
    <Header title="Contact" />
    <ContactUsContainer />
  </div>
))
