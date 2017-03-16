// Constants
export const constants = {
  SEARCH_TEXT: "Dashboard/SEARCH_TEXT",
  POPULATE_PLATES: "Dashboard/POPULATE_PLATES",
  FILTER_SEARCH: "Dashboard/FILTER_SEARCH"
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
  },
  filterSearch(searchText) {
    return {
      type: constants.FILTER_SEARCH,
      searchText: searchText
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
    case constants.FILTER_SEARCH:
      return {
        ...state,
        platesArray: [
          ...state.platesArray.filter(plate => plate.name === action.searchText)
        ]
      };
    default:
      return state;
  }
};
