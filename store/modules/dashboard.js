// Constants
export const constants = {
  NEW_PLATE_DIALOG_OPEN: 'Dashboard/NEW_PLATE_DIALOG_OPEN',
  NEW_PLATE_DIALOG_CLOSED: 'Dashboard/NEW_PLATE_DIALOG_CLOSED'
};

// Actions
export const actions = {
  openDialog() {
    return {
      type: constants.NEW_PLATE_DIALOG_OPEN,
      newPlateDialogOpen: true
    };
  },
  closeDialog() {
    return {
      type: constants.NEW_PLATE_DIALOG_CLOSED,
      newPlateDialogOpen: false
    };
  }
};

// Initial State
export const initialState = {
  newPlateDialogOpen: false
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
    default:
      return state;
  }
};
