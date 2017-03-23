import { constants } from "../utils/constants";

const initialState = {
  quickLinkOpen: false,
  aboutLinkOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.TOGGLE_QUICK_LINK:
      return {
        ...state,
        quickLinkOpen: !state.quickLinkOpen
      };
    case constants.TOGGLE_ABOUT_LINK:
      return {
        ...state,
        aboutLinkOpen: !state.aboutLinkOpen
      };
    default:
      return state;
  }
};
