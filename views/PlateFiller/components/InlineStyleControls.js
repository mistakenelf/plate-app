import PropTypes from 'prop-types'
import React from 'react'
import StyleButton from './StyleButton'

var INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' }
]

export default function InlineStyleControls(props) {
  var currentStyle = props.editorState.getCurrentInlineStyle()
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
      <style jsx>{`
        .RichEditor-controls {
          margin-bottom: 3px;
          user-select: none;
        }
      `}</style>
    </div>
  )
}

InlineStyleControls.propTypes = {
  editorState: PropTypes.object,
  onToggle: PropTypes.func
}
