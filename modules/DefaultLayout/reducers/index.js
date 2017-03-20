import { constants } from "../utils/constants";

const initialState = {
  drawerOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.DRAWER_OPEN:
      return {
        ...state,
        drawerOpen: action.drawerOpen
      };
    case constants.DRAWER_CLOSED:
      return {
        ...state,
        drawerOpen: action.drawerOpen
      };
    default:
      return state;
  }
};
