import fetch from 'isomorphic-fetch'

// Constants
export const constants = {
  GLOBAL_MENU_OPEN: 'Menu/GLOBAL_MENU_OPEN',
  GLOBAL_MENU_CLOSED: 'Menu/GLOBAL_MENU_CLOSED',
  FETCH_SUCCESS: 'Requests/FETCH_SUCCESS'
}

// Actions
export const actions = {
  openMenu () {
    return {
      type: constants.GLOBAL_MENU_OPEN,
      open: true
    }
  },
  closeMenu () {
    return {
      type: constants.GLOBAL_MENU_CLOSED,
      open: false
    }
  },
  fetchRequests () {
    return async (dispatch, getState) => {
      const response = await fetch('/api/requests')
      const requests = await response.json()
      dispatch(actions.fetchSuccess(requests))
    }
  },

  fetchSuccess (requests) {
    return {
      type: constants.FETCH_SUCCESS,
      requests
    }
  }
}


// Reducer
export const initialState = {
  open: false,
  requests: []
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
    case constants.FETCH_SUCCESS:
      return {
        ...state,
        requests: action.requests || []
      }
    default:
      return state
  }
}

