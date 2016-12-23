import * as firebase from 'firebase'

import React, { Component } from 'react'

import AuthenticatedNav from './components/AuthenticatedNav'
import UnauthenticatedNav from './components/UnauthenticatedNav'
import { observer } from 'mobx-react'
import store from './store/store'

const Navigation = observer(class Navigation extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        store.loggedIn = true
      } else {
        store.loggedIn = false
      }
    })
  }

  render() {
    if (store.loggedIn) {
      return (
        <AuthenticatedNav />
      )
    } else {
      return (
        <UnauthenticatedNav />
      )
    }
  }
})

export default Navigation
