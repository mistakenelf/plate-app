import * as firebase from 'firebase'

import React from 'react'
import { render } from 'react-dom'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDL-jDWSC5lrRfRsngBu2gPTEmL2hO2SXE",
  authDomain: "plate-a0b1b.firebaseapp.com",
  databaseURL: "https://plate-a0b1b.firebaseio.com",
  storageBucket: "plate-a0b1b.appspot.com",
  messagingSenderId: "1011831735527"
}

firebase.initializeApp(config)

function TestWrapper({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

export default TestWrapper
