import { combineReducers } from "redux";
import dashboard from "../modules/Dashboard/reducers";
import footer from "../modules/Home/reducers";
import { reducer as formReducer } from "redux-form";
import navigation from "../modules/DefaultLayout/reducers";

// Root reducer for our redux store and
// apollo's store
export default function getReducer(client) {
  return combineReducers({
    navigation,
    dashboard,
    footer,
    form: formReducer,
    apollo: client.reducer()
  });
}
