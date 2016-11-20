import 'react-s-alert/dist/s-alert-default.css'

import Alert from 'react-s-alert'
import Navigation from '../components/navigation/Navigation'
import React from 'react'

function MainLayout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <Alert offset={50} stack={{ limit: 3 }} />
    </div>
  )
}

export default MainLayout
