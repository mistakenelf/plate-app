export function removePlate(id, plate) {
  return {
    type: 'REMOVE_PLATE',
    id,
    plate
  }
}

let plateId = 0

export function addPlate(plateName, plateDescription) {
  return {
    type: 'ADD_PLATE',
    id: plateId++,
    plateName: plateName || 'Default plate name',
    plateDescription: plateDescription || 'This is a newly created plate. Please edit this description'
  }
}
