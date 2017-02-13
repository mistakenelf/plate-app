// Constants
export const constants = {
  GLOBAL_MENU_OPEN: 'GlobalMenu/GLOBAL_MENU_OPEN',
  GLOBAL_MENU_CLOSED: 'GlobalMenu/GLOBAL_MENU_CLOSED'
}

// Actions
export const actions = {
  openMenu () {
    return {
      type: constants.GLOBAL_MENU_OPEN,
      menuOpen: true
    }
  },
  closeMenu () {
    return {
      type: constants.GLOBAL_MENU_CLOSED,
      menuOpen: false
    }
  }
}

// Initial State
export const initialState = {
  menuOpen: false
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GLOBAL_MENU_OPEN:
      return {
        ...state,
        menuOpen: action.menuOpen
      }
    case constants.GLOBAL_MENU_CLOSED:
      return {
        ...state,
        menuOpen: action.menuOpen
      }
    default:
      return state
  }
}
