import { combineReducers } from "redux";
import dashboard from "../modules/Dashboard/reducers";
import { reducer as formReducer } from "redux-form";
import navigation from "../modules/DefaultLayout/reducers";

// Root reducer for our redux store and
// apollo's store
export default function getReducer(client) {
  return combineReducers({
    navigation,
    dashboard,
    form: formReducer,
    apollo: client.reducer()
  });
}
