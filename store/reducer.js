import { combineReducers } from "redux";
import dashboard from "./modules/dashboard";
import drawer from "./modules/drawer";
import footer from "./modules/footer";
import { reducer as formReducer } from "redux-form";

// Root reducer for our redux store and
// apollo's store
export default function getReducer(client) {
  return combineReducers({
    drawer,
    dashboard,
    footer,
    form: formReducer,
    apollo: client.reducer()
  });
}
