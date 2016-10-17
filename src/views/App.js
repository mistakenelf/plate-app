import React from 'react'
import Navigation from '../components/Navigation'
import Wrapper from '../components/Wrapper'

function App({children}) {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  )
}

export default App
