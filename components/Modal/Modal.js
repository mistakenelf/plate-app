import { Animate } from 'react-move'
import DeleteOutline from 'react-icons/lib/ti/delete-outline'
import Portal from 'react-portal'
import PropTypes from 'prop-types'
import React from 'react'

export default function Modal({ open, closeModal, children }) {
  return (
    <Portal isOpened={open}>
      <div className="modal">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <DeleteOutline
                size={30}
                style={{
                  cursor: 'pointer',
                  color: 'white',
                  float: 'right',
                  paddingTop: 10
                }}
                onClick={closeModal}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-4 col-md-offset-2 col-lg-offset-4">
              <Animate
                key="modal"
                easing="circleIn"
                default={{
                  scale: 0
                }}
                data={{
                  scale: 1
                }}
                duration={200}
              >
                {data => (
                  <div
                    style={{
                      transform: `scale(${data.scale})`
                    }}
                  >
                    {children}
                  </div>
                )}
              </Animate>
            </div>
          </div>
        </div>
        <style jsx>{`
          .modal {
            position: fixed;
            z-index: 9999999999;
            left: 0;
            top: 0;
            overflow: auto;
            height: 100vh;
            width: 100%;
            background-color: rgba(0,0,0,0.88);
          }
          @media only screen
          and (min-device-width : 320px)
          and (max-device-width : 1030px) {
            .modal {
              height: 100%;
            }
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
