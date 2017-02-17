// Constants
export const constants = {
  SHOW_LOGIN_MESSAGE: 'LoginForm/SHOW_LOGIN_MESSAGE',
  CLOSE_LOGIN_MESSAGE: 'LoginForm/CLOSE_LOGIN_MESSAGE'
}

// Actions
export const actions = {
  showMessage () {
    return {
      type: constants.SHOW_LOGIN_MESSAGE,
      messageOpen: true
    }
  },
  closeMessage () {
    return {
      type: constants.CLOSE_LOGIN_MESSAGE,
      messageOpen: false
    }
  }
}

// Initial State
export const initialState = {
  messageOpen: false
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW_LOGIN_MESSAGE:
      return {
        ...state,
        messageOpen: action.messageOpen
      }
    case constants.CLOSE_LOGIN_MESSAGE:
      return {
        ...state,
        messageOpen: action.messageOpen
      }
    default:
      return state
  }
}
