import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Wrapper from '../components/wrapper/Wrapper'

function App({children}) {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  )
}

export default App
