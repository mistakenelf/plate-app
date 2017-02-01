import { action, observable } from 'mobx'

class Store {
  @observable modalOpen = false
  @observable menuOpen = false
  @observable loading = false

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

}

export default new Store()
