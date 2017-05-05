import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import modalReducer from '../redux/modalReducer'

// Root reducer for our redux store and
// apollo's store
const getReducer = client => {
  return combineReducers({
    form: formReducer,
    apollo: client.reducer(),
    modalReducer
  })
}

export default getReducer
