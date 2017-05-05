export const constants = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

export const actions = {
  openModal() {
    return {
      type: constants.OPEN_MODAL,
      modalOpen: true
    }
  },
  closeModal() {
    return {
      type: constants.CLOSE_MODAL,
      modalOpen: false
    }
  }
}

export const initialState = {
  modalOpen: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.OPEN_MODAL:
      return {
        ...state,
        modalOpen: action.openModal
      }

    case constants.CLOSE_MODAL:
      return {
        ...state,
        modalOpen: action.closeModal
      }

    default:
      return state
  }
}
