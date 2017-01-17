import { observable } from 'mobx'

const store = observable({
  sidebarOpen: false,
  loggedIn: false
})

export default store
