import { action, observable } from 'mobx'

class Store {
  @observable modalOpen = false

  @action openModal = () => {
    this.modalOpen = true
  }

  @action closeModal = () => {
    this.modalOpen = false
  }
}

export default new Store()
