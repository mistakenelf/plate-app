import PropTypes from 'prop-types'
import React from 'react'

const recoverPlate = async (plate, addRecoveredPlate, removeRecoveredPlate) => {
  console.log(plate.id)
  await addRecoveredPlate(
    plate.name,
    plate.description,
    plate.thumbnail,
    plate.status,
    plate.content,
    plate.createdBy
  )
  await removeRecoveredPlate(plate.id)
}

const removePlate = async (plateId, removeRecoveredPlate) => {
  console.log(plateId)
  await removeRecoveredPlate(plateId)
}

const RemovedPlates = ({
  recoverPlates,
  addRecoveredPlate,
  removeRecoveredPlate
}) => {
  return (
    <table style={{ width: '100%', textAlign: 'center' }}>
      <caption>Recover Plates</caption>
      <thead>
        <tr>
          <th>Plate Name</th>
          <th>Recover Plate</th>
          <th>Remove Plate</th>
        </tr>
      </thead>
      <tbody>
        {recoverPlates.map((plate, index) => (
          <tr key={index}>
            <td data-label="name">{plate.name}</td>
            <td data-label="recover">
              <button
                type="button"
                className="primary"
                onClick={() =>
                  recoverPlate(plate, addRecoveredPlate, removeRecoveredPlate)}
              >
                Recover Plate
              </button>
            </td>
            <td data-label="remove">
              <button
                type="button"
                className="secondary"
                onClick={() => removePlate(plate.id, removeRecoveredPlate)}
              >
                Remove Plate
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

RemovedPlates.propTypes = {
  recoverPlates: PropTypes.array,
  addRecoveredPlate: PropTypes.func,
  removeRecoveredPlate: PropTypes.func
}

export default RemovedPlates
