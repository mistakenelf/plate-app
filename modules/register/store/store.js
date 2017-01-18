import { observable } from 'mobx'

const store = observable({
  errorState: 'none',
  errorMessage: '',
  loading: false,
})

export default store
