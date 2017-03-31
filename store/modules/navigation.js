// Constants
const constants = {
  DRAWER_OPEN: "Navigation/DRAWER_OPEN",
  DRAWER_CLOSED: "Navigation/DRAWER_CLOSED"
};

// Actions
export const actions = {
  openDrawer() {
    return {
      type: constants.DRAWER_OPEN,
      open: true
    };
  },
  closeDrawer() {
    return {
      type: constants.DRAWER_CLOSED,
      open: false
    };
  }
};

// Initial State
const initialState = {
  open: false
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case constants.DRAWER_OPEN:
      return {
        ...state,
        open: action.open
      };
    case constants.DRAWER_CLOSED:
      return {
        ...state,
        open: action.open
      };
    default:
      return state;
  }
};
