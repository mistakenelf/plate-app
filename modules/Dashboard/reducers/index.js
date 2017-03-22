import { constants } from "../utils/constants";

const initialState = {
  searchText: "",
  createPlateDialogOpen: false,
  removePlateDialogOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SEARCH_TEXT:
      return {
        ...state,
        searchText: action.searchText
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
    case constants.OPEN_REMOVE_PLATE_DIALOG:
      return {
        ...state,
        removePlateDialogOpen: action.removePlateDialogOpen
      };
    case constants.CLOSE_REMOVE_PLATE_DIALOG:
      return {
        ...state,
        removePlateDialogOpen: action.removePlateDialogOpen
      };
    default:
      return state;
  }
};
