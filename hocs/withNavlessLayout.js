import React, { Component } from 'react'

import Header from '../components/Header/Header'
import configureLoadingProgressBar from '../utils/routing'

export default ComposedComponent =>
  class WithNavlessLayout extends Component {
    componentDidMount() {
      configureLoadingProgressBar()
    }

    render() {
      return (
        <div>
          <Header title="Plate" />
          <ComposedComponent {...this.props} />
          <style jsx global>{`
            body {
              background: linear-gradient(-90deg, rgb(141, 95, 115), #343f53);
            }
          `}</style>
        </div>
      )
    }
  }
