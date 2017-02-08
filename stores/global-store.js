import { action, observable } from 'mobx'

let store = null

class Store {
  @observable modalOpen = false
  @observable menuOpen = false
  @observable loading = false
  @observable loggedIn = false
  @observable registerMessage = false
  @observable registerMessageHidden = true
  @observable loginMessage = false
  @observable loginMessageHidden = true
  @observable displayUserName = ''

  @action openModal = () => {
    this.modalOpen = true
  }

  @action openMenu = () => {
    this.menuOpen = true
  }

  @action closeModal = () => {
    this.modalOpen = false
  }

  @action closeMenu = () => {
    this.menuOpen = false
  }

  @action startLoading = () => {
    this.loading = true
  }

  @action stopLoading = () => {
    this.loading = false
  }

  @action showRegisterMessage = () => {
    this.registerMessage = true
    this.registerMessageHidden = false
  }

  @action hideRegisterMessage = () => {
    this.registerMessage = false
    this.registerMessageHidden = true
  }

  @action showLoginMessage = () => {
    this.loginMessage = true
    this.loginMessageHidden = false
  }

  @action hideLoginMessage = () => {
    this.loginMessage = false
    this.loginMessageHidden = true
  }
}

export default function initGlobalStore (isServer) {
  if (isServer && typeof window === 'undefined') {
    return new Store(isServer)
  } else {
    if (store === null) {
      store = new Store(isServer)
    }
    return store
  }
}
