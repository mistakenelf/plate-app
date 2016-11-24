import Navigation from '../components/navigation/Navigation'
import React from 'react'
import ReduxToastr from 'react-redux-toastr'

function MainLayout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates={true}
        position='bottom-center'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar />
    </div>
  )
}

export default MainLayout
