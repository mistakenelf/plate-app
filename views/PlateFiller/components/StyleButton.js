import React, { Component } from 'react'

import PropTypes from 'prop-types'

class StyleButton extends Component {
  static propTypes = {
    onToggle: PropTypes.func,
    style: PropTypes.string,
    label: PropTypes.string,
    active: PropTypes.bool
  }

  onToggle = e => {
    e.preventDefault()
    this.props.onToggle(this.props.style)
  }

  render() {
    let className = 'RichEditor-styleButton'
    if (this.props.active) {
      className += ' RichEditor-activeButton'
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
        <style jsx>{`
          .RichEditor-styleButton {
            color: #999;
            cursor: pointer;
            font-size: 13px;
            margin-right: 16px;
            padding: 2px 0;
          }
          .RichEditor-activeButton {
            color: #5890ff;
          }
        `}</style>
      </span>
    )
  }
}

export default StyleButton
