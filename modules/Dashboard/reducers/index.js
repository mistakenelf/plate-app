import { constants } from "../utils/constants";

const initialState = {
  searchText: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SEARCH_TEXT:
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};
