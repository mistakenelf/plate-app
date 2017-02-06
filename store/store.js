import { action, extendObservable } from 'mobx'

class Store {
  constructor () {
    extendObservable(this, {
      modalOpen: false,
      menuOpen: false,
      loading: false,
      loggedIn: false,
      registerMessage: false,
      registerMessageHidden: true,
      loginMessage: false,
      loginMessageHidden: true,
      displayUserName: '',

      openModal: action(() => {
        this.modalOpen = true
      }),

      openMenu: action(() => {
        this.menuOpen = true
      }),

      closeModal: action(() => {
        this.modalOpen = false
      }),

      closeMenu: action(() => {
        this.menuOpen = false
      }),

      startLoading: action(() => {
        this.loading = true
      }),

      stopLoading: action(() => {
        this.loading = false
      }),

      showRegisterMessage: action(() => {
        this.registerMessage = true
        this.registerMessageHidden = false
      }),

      hideRegisterMessage: action(() => {
        this.registerMessage = false
        this.registerMessageHidden = true
      }),

      showLoginMessage: action(() => {
        this.loginMessage = true
        this.loginMessageHidden = false
      }),

      hideLoginMessage: action(() => {
        this.loginMessage = false
        this.loginMessageHidden = true
      })
    })
  }
}

export default new Store()
