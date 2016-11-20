import 'react-s-alert/dist/s-alert-default.css'

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
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar />
    </div>
  )
}

export default MainLayout
