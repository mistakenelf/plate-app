import { observable } from 'mobx'

const store = observable({
  activeItem: 'home',
  loggedIn: true
})

export default store
