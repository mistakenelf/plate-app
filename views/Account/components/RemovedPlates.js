import PropTypes from 'prop-types'
import React from 'react'

const recoverPlate = (plate, addRecoveredPlate) => {
  addRecoveredPlate(
    plate.name,
    plate.description,
    plate.thumbnail,
    plate.status,
    plate.content,
    plate.createdBy
  )
}

const RemovedPlates = ({ recoverPlates, addRecoveredPlate }) => {
  return (
    <table>
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
                onClick={() => recoverPlate(plate, addRecoveredPlate)}
              >
                Recover Plate
              </button>
            </td>
            <td data-label="remove">
              <button type="button" className="secondary">Remove Plate</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

RemovedPlates.propTypes = {
  recoverPlates: PropTypes.array,
  addRecoveredPlate: PropTypes.func
}

export default RemovedPlates
