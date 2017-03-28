import { constants } from "../utils/constants";

export const actions = {
  doSearch(searchText) {
    return {
      type: constants.SEARCH_TEXT,
      searchText
    };
  },
  completePlate() {
    return {
      type: constants.TOGGLE_COMPLETE_PLATE,
      plateCompleted: true
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
  }
};
