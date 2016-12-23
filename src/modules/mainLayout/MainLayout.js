import Navigation from '../navigation/Navigation'
import React from 'react'

function MainLayout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default MainLayout
