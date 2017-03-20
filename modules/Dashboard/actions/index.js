import { constants } from "../utils/constants";

export const actions = {
  doSearch(searchText) {
    return {
      type: constants.SEARCH_TEXT,
      searchText: searchText
    };
  }
};
