import { action, observable } from 'mobx'

class Store {
  @observable modalOpen = false
  @observable menuOpen = false
  @observable loading = false
  @observable loggedIn = false;

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

  @action doLogin = () => {
    this.loggedIn = true
  }

  @action doLogout = () => {
    this.loggedIn = false
  }

}

export default new Store()
