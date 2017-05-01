const constants = {
  SHOW_NOTIFICATION: 'Notifications/SHOW_NOTIFICATION'
}

export const actions = {
  showNotification() {
    return {
      type: constants.LOGIN_SUCCESS,
      show: true
    }
  }
}

const initialState = {
  show: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.SHOW_NOTIFICATION:
      return {
        ...state,
        show: action.show
      }
    default:
      return state
  }
}
