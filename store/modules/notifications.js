const constants = {
  SHOW_NOTIFICATIONS: 'Notifications/SHOW_NOTIFICATIONS'
}

export const actions = {
  showNotifications() {
    return {
      type: constants.SHOW_NOTIFICATIONS,
      show: true
    }
  }
}

const initialState = {
  show: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.SHOW_NOTIFICATIONS:
      return {
        ...state,
        show: action.show
      }
    default:
      return state
  }
}
