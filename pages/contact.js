import ContactUsContainer from '../containers/ContactUsContainer'
import React from 'react'
import { pageWithDefaultLayout } from '../hocs/page'

const contact = () => {
  return (
    <div>
      <ContactUsContainer />
    </div>
  )
}

export default pageWithDefaultLayout(contact)
