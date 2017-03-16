import { combineReducers } from "redux";
import drawer from "./modules/drawer";
import { reducer as formReducer } from "redux-form";
import plateSearch from "./modules/plateSearch";

// Root reducer for our redux store and
// apollo's store
export default function getReducer(client) {
  return combineReducers({
    drawer,
    plateSearch,
    form: formReducer,
    apollo: client.reducer()
  });
}
