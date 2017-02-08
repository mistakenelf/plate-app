import { auth } from '../utils/db'
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
}

export default function getAuthStore () {
  if (store === null) {
    store = new Store()
  }
  return store
}
