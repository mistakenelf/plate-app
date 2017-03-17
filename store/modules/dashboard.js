// Constants
export const constants = {
  SEARCH_TEXT: "Dashboard/SEARCH_TEXT",
  POPULATE_PLATES: "Dashboard/POPULATE_PLATES"
};

// Actions
export const actions = {
  doSearch(searchText) {
    return {
      type: constants.SEARCH_TEXT,
      searchText: searchText
    };
  },
  populatePlates(plates) {
    return {
      type: constants.POPULATE_PLATES,
      plates: plates
    };
  }
};

// Initial State
export const initialState = {
  searchText: "",
  platesArray: []
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SEARCH_TEXT:
      return {
        ...state,
        searchText: action.searchText
      };
    case constants.POPULATE_PLATES:
      return {
        ...state,
        platesArray: action.plates
      };
    default:
      return state;
  }
};
