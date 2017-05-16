import React from 'react'

const RemovedPlates = () => {
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
        <tr>
          <td data-label="name">Plate name here</td>
          <td data-label="recover">
            <button type="button" className="primary">Recover Plate</button>
          </td>
          <td data-label="remove">
            <button type="button" className="secondary">Remove Plate</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default RemovedPlates
