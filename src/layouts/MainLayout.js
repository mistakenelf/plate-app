import React from 'react'
import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-default.css'
import Navigation from '../components/navigation/Navigation'

function MainLayout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <Alert offset={50} stack={{limit: 3}} />
    </div>
  )
}

export default MainLayout
