import React from 'react'
import Navigation from '../../components/navigation/Navigation'

function MainLayout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default MainLayout
