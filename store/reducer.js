import { combineReducers } from "redux";
import dashboard from "./modules/dashboard";
import drawer from "./modules/drawer";
import { reducer as formReducer } from "redux-form";

// Root reducer for our redux store and
// apollo's store
export default function getReducer(client) {
  return combineReducers({
    drawer,
    dashboard,
    form: formReducer,
    apollo: client.reducer()
  });
}
