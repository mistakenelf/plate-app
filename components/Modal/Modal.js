import Icon from '../Icon/Icon'
import Portal from 'react-portal'
import PropTypes from 'prop-types'
import React from 'react'

const Modal = ({ open, closeModal, children }) => {
  return (
    <Portal
      closeOnEsc
      closeOnOutsideClick
      isOpened={open}
      style={{ width: '100%' }}
    >
      <div>
        <div className="modal">
          <div className="modal-content">
            <Icon
              type="fa fa-times fa-lg"
              style={{ float: 'right', cursor: 'pointer' }}
              onClick={closeModal}
            />
            {children}
          </div>
        </div>
        <style jsx>{`
        .modal {
          position: fixed;
          z-index: 2;
          left: 0;
          top: 0;
          width: 100%;
          overflow: auto;
          background-color: rgb(0,0,0);
          background-color: rgba(0,0,0,0.4);
        }
        @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 1030px) {
          .modal {
            height: 100%;
          }
        }
        .modal-content {
          background-color: #fefefe;
          border-radius: 5px;
          margin: 15% auto;
          padding: 20px;
          width: 80%;
        }
      `}</style>
      </div>
    </Portal>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  closeModal: PropTypes.func
}

export default Modal
