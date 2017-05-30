import React from 'react'
import TermsAndConditions from '../views/TermsAndConditions'
import { pageWithDefaultLayout } from '../hocs/page'

export default pageWithDefaultLayout(function terms() {
  return <TermsAndConditions />
})
