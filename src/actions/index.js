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
    plateName,
    plateDescription
  }
}
