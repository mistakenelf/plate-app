import React from 'react'
import Navigation from '../components/Navigation'
import AppWrapper from '../components/AppWrapper'

function App({children}) {
  return (
    <AppWrapper>
      <Navigation />
      {children}
    </AppWrapper>
  )
}

export default App
