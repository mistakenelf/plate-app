import { observer } from 'mobx-react'

const store = observer({
  errorState: 'none',
  errorMessage: '',
  loading: false,
})

export default store
