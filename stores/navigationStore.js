import { action, observable } from 'mobx'
 
  class Store {
    @observable menuActive = false

    @action openDrawer = () => {
      this.menuActive = true
    }

    @action closeDrawer = () => {
      this.menuActive = false
    }
  }
 
export default new Store()