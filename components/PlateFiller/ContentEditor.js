import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw,
} from 'draft-js'
import React, { Component } from 'react'

import BlockStyleControls from './BlockStyleControls'
import InlineStyleControls from './InlineStyleControls'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import { getBlockStyle } from './getBlockStyle'
import { styleMap } from './styleMap'

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
      ),
      currBackground: 0
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

  handleKeyCommand = command => {
    const { editorState } = this.state
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }

  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType))
  }

  toggleInlineStyle = inlineStyle => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    )
  }

  changeToChalkboard = () => {
    this.setState({
      currBackground: 0
    })
  }

  changeToBlank = () => {
    this.setState({
      currBackground: 1
    })
  }

  render() {
    const backgroundImage = ['/static/img/chalkboard.jpg', '']
    return (
      <div className="RichEditor-root">
        <div className="button-container">
          <h3 onTouchTap={this.changeToChalkboard}>chalkboard</h3>
          <h3 onTouchTap={this.changeToBlank}>blank</h3>
          <BlockStyleControls
            editorState={this.state.editorState}
            onToggle={this.toggleBlockType}
          />
        </div>
        <div className="button-container">
          <InlineStyleControls
            editorState={this.state.editorState}
            onToggle={this.toggleInlineStyle}
          />
        </div>
        <div
          className="RichEditor-editor"
          style={{
            backgroundImage: 'url(' +
              backgroundImage[this.state.currBackground] +
              ')'
          }}
          onClick={this.focus}
        >
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            ref={input => {
              this.editor = input
            }}
            spellCheck={true}
          />
        </div>
        <style jsx global>
          {`
            RichEditor-root {
              background: #fff;
              font-family: 'Fredericka the Great', cursive;
              font-size: 14px;
              padding: 15px;
            }
            .RichEditor-editor {
              font-family: 'Fredericka the Great', cursive;
              cursor: text;
              font-size: 16px;
              margin-top: 10px;
              color: #ffffff;
              padding: 15px;
            }
            .RichEditor-editor .RichEditor-blockquote {
              border-left: 5px solid #eee;
              color: #666;
              font-family: 'Fredericka the Great', cursive;
              margin: 16px 0;
              padding: 10px 20px;
            }
            .RichEditor-editor .public-DraftStyleDefault-pre {
              background-color: rgba(0, 0, 0, 0.05);
              font-family: 'Inconsolata', 'Menlo', 'Consolas', monospace;
              font-size: 16px;
              padding: 20px;
            }
            .button-container {
              word-wrap: break-word;
              text-align: center;
            }
          `}
        </style>
      </div>
    )
  }
}

export default ContentEditor
