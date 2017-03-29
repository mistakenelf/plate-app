import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

// Root reducer for our redux store and
// apollo's store
export default function getReducer(client) {
  return combineReducers({
    form: formReducer,
    apollo: client.reducer()
  });
}
