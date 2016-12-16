import * as firebase from 'firebase'

import React, { Component } from 'react'

import AuthenticatedNav from './AuthenticatedNav'
import UnauthenticatedNav from './UnauthenticatedNav'

export default class Navigation extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.setState({
          loggedIn: true
        })
      } else {
        this.setState({
          loggedIn: false
        })
      }
    })
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <AuthenticatedNav />
      )
    } else {
      return (
        <UnauthenticatedNav />
      )
    }
  }
}
