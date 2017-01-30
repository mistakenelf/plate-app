import { action, observable } from 'mobx'

class Store {
  @observable modalOpen = false
  @observable menuOpen = false

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
}

export default new Store()
