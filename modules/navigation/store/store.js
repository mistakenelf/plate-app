import { observable } from 'mobx'

const store = observable({
  activeItem: 'home',
  loggedIn: false
})

export default store
