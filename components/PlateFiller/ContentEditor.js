import { Editor, EditorState } from 'draft-js';
import { convertFromHTML, convertToHTML } from 'draft-convert';

import PropTypes from 'prop-types';
import React from 'react';

class ContentEditor extends React.Component {
  static propTypes = {
    saveContent: PropTypes.func,
    plateContent: PropTypes.string,
    plateId: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(
        convertFromHTML(props.plateContent)
      )
    };
  }

  onChange = editorState => {
    this.setState({
      editorState
    });

    let htmlContent = convertToHTML(editorState.getCurrentContent());
    this.props.saveContent(this.props.plateId, htmlContent);
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
          onChange={this.onChange}
          ref={input => {
            this.editor = input;
          }}
        />
        <style jsx>
          {`
            .editor {
              height: 100vh;
            }
            `}
        </style>
      </div>
    );
  }
}

export default ContentEditor;
