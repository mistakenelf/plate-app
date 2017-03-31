import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import navigation from "./modules/navigation";

// Root reducer for our redux store and
// apollo's store
export default function getReducer(client) {
  return combineReducers({
    navigation,
    form: formReducer,
    apollo: client.reducer()
  });
}
