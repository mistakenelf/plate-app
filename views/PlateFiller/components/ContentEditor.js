import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw,
} from 'draft-js'
import React, { Component } from 'react'

import BlockStyleControls from './BlockStyleControls'
import DropDownMenu from 'material-ui/DropDownMenu'
import InlineStyleControls from './InlineStyleControls'
import MenuItem from 'material-ui/MenuItem'
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
    this.constants = {
      CHALKBOARD: 0,
      WHITE: 1
    }

    this.state = {
      editorState: EditorState.createWithContent(
        convertFromRaw(JSON.parse(props.plateContent))
      ),
      currBackground: this.constants.WHITE,
      value: 1
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

  onTab = e => {
    const maxDepth = 4
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth))
  }

  handleDropChange = (event, index, value) => {
    this.setState({
      value
    })
  }

  changeToChalkboard = () => {
    this.setState({
      currBackground: this.constants.CHALKBOARD
    })
  }

  changeToBlank = () => {
    this.setState({
      currBackground: this.constants.WHITE
    })
  }

  render() {
    return (
      <div className="RichEditor-root">
        <div className="button-container">
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
        <div className="button-container">
          <DropDownMenu
            value={this.state.value}
            style={{ width: 200 }}
            labelStyle={{ color: '#999' }}
            onChange={this.handleDropChange}
          >
            <MenuItem
              value={1}
              primaryText="White"
              onTouchTap={this.changeToBlank}
            />
            <MenuItem
              value={0}
              primaryText="Chalkboard"
              onTouchTap={this.changeToChalkboard}
            />
          </DropDownMenu>
        </div>
        <div
          className="RichEditor-editor"
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundImage: this.state.currBackground === 0
              ? 'url(https://res.cloudinary.com/knipferrc/image/upload/v1493208940/chalkboard_th5tlf.jpg)'
              : 'none',
            backgroundColor: this.state.currBackground === 1 ? 'white' : 'none',
            color: this.state.currBackground === 1 ? 'black' : 'white'
          }}
          onClick={this.focus}
        >
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
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
              font-size: 14px;
              padding: 15px;
            }
            .RichEditor-editor {
              cursor: text;
              font-size: 16px;
              margin-top: 10px;
              padding: 15px;
              min-height: 400px;
            }
            .RichEditor-editor .RichEditor-blockquote {
              border-left: 5px solid #eee;
              color: #666;
              font-family: 'Fredericka the Great', cursive;
              margin: 16px 0;
              padding: 10px 20px;
            }
            .RichEditor-editor .public-DraftStyleDefault-pre {
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
