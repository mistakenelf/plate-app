// Constants
export const constants = {
  GLOBAL_MENU_OPEN: 'Menu/GLOBAL_MENU_OPEN',
  GLOBAL_MENU_CLOSED: 'Menu/GLOBAL_MENU_CLOSED'
}

// Actions
export const openMenu = () => dispatch => {
  return dispatch({
    type: constants.GLOBAL_MENU_OPEN,
    open: true
  })
}

export const closeMenu = () => dispatch => {
  return dispatch({
    type: constants.GLOBAL_MENU_CLOSED,
    open: false
  })
}

// Reducer
export const initialState = {
  open: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GLOBAL_MENU_OPEN:
      return {
        ...state,
        open: action.open
      }
    case constants.GLOBAL_MENU_CLOSED:
      return {
        ...state,
        open: action.open
      }
    default:
      return state
  }
}

