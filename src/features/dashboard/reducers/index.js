function plates(state = [], action) {
  switch (action.type) {
    case 'ADD_PLATE':
      return [
        ...state,
        {
          id: action.id,
          plateName: action.plateName,
          plateDescription: action.plateDescription
        }
      ]
    case 'REMOVE_PLATE':
      return state.filter(plate =>
        plate.id !== action.id
      )
    default:
      return state
  }
}

export default plates
