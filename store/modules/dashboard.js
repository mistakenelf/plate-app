// Constants
export const constants = {
  NEW_PLATE_DIALOG_OPEN: 'Dashboard/NEW_PLATE_DIALOG_OPEN',
  NEW_PLATE_DIALOG_CLOSED: 'Dashboard/NEW_PLATE_DIALOG_CLOSED',
  REMOVE_PLATES_DIALOG_OPEN: 'Dashboard/REMOVE_PLATES_DIALOG_OPEN',
  REMOVE_PLATES_DIALOG_CLOSED: 'Dashboard/REMOVE_PLATES_DIALOG_CLOSED'
};

// Actions
export const actions = {
  openNewPlateDialog() {
    return {
      type: constants.NEW_PLATE_DIALOG_OPEN,
      newPlateDialogOpen: true
    };
  },
  closeNewPlateDialog() {
    return {
      type: constants.NEW_PLATE_DIALOG_CLOSED,
      newPlateDialogOpen: false
    };
  },
  openRemovePlatesDialog() {
    return {
      type: constants.REMOVE_PLATES_DIALOG_OPEN,
      removePlatesDialogOpen: true
    };
  },
  closeRemovePlatesDialog() {
    return {
      type: constants.REMOVE_PLATES_DIALOG_CLOSED,
      removePlatesDialogOpen: false
    };
  }
};

// Initial State
export const initialState = {
  newPlateDialogOpen: false,
  removePlatesDialogOpen: false
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case constants.NEW_PLATE_DIALOG_OPEN:
      return {
        ...state,
        newPlateDialogOpen: action.newPlateDialogOpen
      };
    case constants.NEW_PLATE_DIALOG_CLOSED:
      return {
        ...state,
        newPlateDialogOpen: action.newPlateDialogOpen
      };
    case constants.REMOVE_PLATES_DIALOG_OPEN:
      return {
        ...state,
        removePlatesDialogOpen: action.removePlatesDialogOpen
      }
    case constants.REMOVE_PLATES_DIALOG_CLOSED:
      return {
        ...state,
        removePlatesDialogOpen: action.removePlatesDialogOpen
      }
    default:
      return state;
  }
};
