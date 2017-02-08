import { auth } from '../utils/db'
import firebase from 'firebase'
import { observable } from 'mobx'

let store = null

class Store {
  @observable user = null

  constructor (isServer) {
    if (isServer) return
    this.unwatchAuth = auth.onAuthStateChanged(user => {
      this.user = user
    })
  }

  cleanup () {
    if (this.unwatchAuth) {
      this.unwatchAuth()
    }
  }

  signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider).then((result) => {
    }).catch((error) => {
      console.log(error)
    })
  }

  signOut = () => {
    auth.signOut().then(() => {
      // Sign-out successful.
    }, (error) => {
      console.log(error)
    })
  }
}

export default function getAuthStore () {
  if (store === null) {
    store = new Store()
  }
  return store
}
