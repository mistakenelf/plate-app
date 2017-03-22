import { constants } from "../utils/constants";

export const actions = {
  doSearch(searchText) {
    return {
      type: constants.SEARCH_TEXT,
      searchText
    };
  },
  openCreatePlateDialog() {
    return {
      type: constants.OPEN_CREATE_PLATE_DIALOG,
      createPlateDialogOpen: true
    };
  },
  closeCreatePlateDialog() {
    return {
      type: constants.CLOSE_CREATE_PLATE_DIALOG,
      createPlateDialogOpen: false
    };
  },
  openRemovePlateDialog() {
    return {
      type: constants.OPEN_CREATE_PLATE_DIALOG,
      removePlateDialogOpen: true
    };
  },
  closeRemovePlateDialog() {
    return {
      type: constants.CLOSE_CREATE_PLATE_DIALOG,
      removePlateDialogOpen: false
    };
  }
};
