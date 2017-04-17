import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw,
} from 'draft-js'
import React, { Component } from 'react'

import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'

class ContentEditor extends Component {
  static propTypes = {
    saveContent: PropTypes.func,
    plateContent: PropTypes.string,
    plateId: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createWithContent(
        convertFromRaw(JSON.parse(props.plateContent))
      )
    }
  }

  saveContent = debounce(content => {
    this.props.saveContent(this.props.plateId, content)
  }, 500)

  onChange = editorState => {
    this.setState({
      editorState
    })

    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    )

    this.saveContent(content)
  }

  focus = () => {
    this.editor.focus()
  }

  render() {
    return (
      <div className="editor" onClick={this.focus}>
        <Editor
          editorKey="ContentEditor"
          editorState={this.state.editorState}
          onChange={this.onChange}
          ref={input => {
            this.editor = input
          }}
        />
        <style jsx>
          {`
            .editor {
              min-height: 500px;
              height: auto;
              padding: 15px;
              border-radius: 5px;
              border-color: blue;
              margin-bottom: 20px;
            }
            `}
        </style>
      </div>
    )
  }
}

export default ContentEditor
