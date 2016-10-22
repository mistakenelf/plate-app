import React from 'react'
import * as firebase from 'firebase'
import AuthenticatedNav from './AuthenticatedNav'
import UnauthenticatedNav from './UnauthenticatedNav'

function Navigation() {
  let user = firebase.auth().currentUser;
  if(user) {
    return (
      <AuthenticatedNav />
    )
  } else {
    return (
      <UnauthenticatedNav />
    )
  }
}
 export default Navigation
