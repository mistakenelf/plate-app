// Constants
export const constants = {
  TOGGLE_LINK: "Footer/TOGGLE_LINK"
};

// Actions
export const actions = {
  toggleLink() {
    return {
      type: constants.TOGGLE_LINK,
      open: !open
    };
  }
};

// Initial State
export const initialState = {
  open: false
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case constants.TOGGLE_LINK:
      return {
        ...state,
        open: action.open
      };
    default:
      return state;
  }
};
