// Constants
export const constants = {
  SEARCH_TEXT: "Dashboard/SEARCH_TEXT"
};

// Actions
export const actions = {
  doSearch(searchText) {
    return {
      type: constants.SEARCH_TEXT,
      searchText: searchText
    };
  }
};

// Initial State
export const initialState = {
  searchText: ""
};

// Reducer
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
