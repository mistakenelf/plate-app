import React, { Component } from 'react'

import Portal from 'react-portal'

export default ComposedComponent =>
  class Portal extends Component {
    render() {
      return (
        <Portal
          closeOnEsc
          closeOnOutsideClick
          isOpened={open}
          style={{ width: '100%' }}
        >
          <ComposedComponent {...this.props} />
        </Portal>
      )
    }
  }
