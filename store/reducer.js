import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import notifications from './modules/notifications'

// Root reducer for our redux store and
// apollo's store
const getReducer = client => {
  return combineReducers({
    notifications,
    form: formReducer,
    apollo: client.reducer()
  })
}

export default getReducer
