import { Editor, EditorState, RichUtils } from 'draft-js';
import { convertFromHTML, convertToHTML } from 'draft-convert';

import PropTypes from 'prop-types';
import React from 'react';
import debounce from 'lodash/debounce';

class ContentEditor extends React.Component {
  static propTypes = {
    saveContent: PropTypes.func,
    plateContent: PropTypes.string,
    plateId: PropTypes.string
  };

  state = {
    editorState: EditorState.createWithContent(
      convertFromHTML(this.props.plateContent)
    )
  };

  saveContent = debounce(htmlContent => {
    this.props.saveContent(this.props.plateId, htmlContent);
  }, 500);

  onChange = editorState => {
    this.setState({
      editorState
    });

    let htmlContent = convertToHTML(editorState.getCurrentContent());
    this.saveContent(htmlContent);
  };

  handleKeyCommand = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div className="editor" onClick={this.focus}>
        <Editor
          editorKey="ContentEditor"
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          ref={input => {
            this.editor = input;
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
              box-shadow: inset 0 0 8px #9E9E9E;
            }
            `}
        </style>
      </div>
    );
  }
}

export default ContentEditor;
