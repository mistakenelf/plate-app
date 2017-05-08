import Icon from '../Icon/Icon'
import PropTypes from 'prop-types'
import React from 'react'
import { injectState } from 'freactal'

const Modal = injectState(({ open, children, effects }) => {
  return (
    <div>
      <div
        className="modal"
        style={open ? { display: 'inline' } : { display: 'none' }}
      >
        <div className="modal-content">
          <Icon
            type="fa fa-times fa-lg"
            style={{ float: 'right', cursor: 'pointer' }}
            onClick={effects.closeModal}
          />
          {children}
        </div>
      </div>
      <style jsx>
        {`
          .modal {
            position: fixed;
            z-index: 2;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0,0,0);
            background-color: rgba(0,0,0,0.4);
          }
          .modal-content {
            background-color: #fefefe;
            border-radius: 5px;
            margin: 15% auto;
            padding: 20px;
            width: 50%;
          }
        `}
      </style>
    </div>
  )
})

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool
}

export default Modal
