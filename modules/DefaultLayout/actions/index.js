import { constants } from "../utils/constants";

export const actions = {
  openDrawer() {
    return {
      type: constants.DRAWER_OPEN,
      drawerOpen: true
    };
  },
  closeDrawer() {
    return {
      type: constants.DRAWER_CLOSED,
      drawerOpen: false
    };
  }
};
