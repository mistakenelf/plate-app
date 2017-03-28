import { constants } from "../utils/constants";

const initialState = {
  searchText: "",
  plateCompleted: false,
  createPlateDialogOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SEARCH_TEXT:
      return {
        ...state,
        searchText: action.searchText
      };
    case constants.TOGGLE_COMPLETE_PLATE:
      return {
        ...state,
        plateCompleted: action.plateCompleted
      };
    case constants.OPEN_CREATE_PLATE_DIALOG:
      return {
        ...state,
        createPlateDialogOpen: action.createPlateDialogOpen
      };
    case constants.CLOSE_CREATE_PLATE_DIALOG:
      return {
        ...state,
        createPlateDialogOpen: action.createPlateDialogOpen
      };
    default:
      return state;
  }
};
