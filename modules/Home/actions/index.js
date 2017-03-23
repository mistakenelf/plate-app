import { constants } from "../utils/constants";

export const actions = {
  toggleQuickLink() {
    return {
      type: constants.TOGGLE_QUICK_LINK
    };
  },
  toggleAboutLink() {
    return {
      type: constants.TOGGLE_ABOUT_LINK
    };
  }
};
