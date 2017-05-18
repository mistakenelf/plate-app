import PropTypes from 'prop-types'
import React from 'react'

const recoverPlate = async (plate, addRecoveredPlate, removeRecoveredPlate) => {
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
  await removeRecoveredPlate(plateId)
}

const RemovedPlates = ({
  recoverPlates,
  addRecoveredPlate,
  removeRecoveredPlate
}) => {
  if (recoverPlates.length === 0) {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Recover Plates</h2>
        <h3 style={{ textAlign: 'center' }}>
          <i>You currently have no plates to be recovered.</i>
        </h3>
      </div>
    )
  } else {
    return (
      <table style={{ width: '100%', textAlign: 'center' }}>
        <caption>Recover Plates</caption>
        <thead>
          <tr>
            <th>Plate Name</th>
            <th>Recover Plate</th>
            <th>Remove Plate</th>
            <th>Date Deleted</th>
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
                    recoverPlate(
                      plate,
                      addRecoveredPlate,
                      removeRecoveredPlate
                    )}
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
              <td data-label="date-deleted">
                {plate.dateDeleted}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

RemovedPlates.propTypes = {
  recoverPlates: PropTypes.array,
  addRecoveredPlate: PropTypes.func,
  removeRecoveredPlate: PropTypes.func
}

export default RemovedPlates
