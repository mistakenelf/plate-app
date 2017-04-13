import { Editor, Plain, resetKeyGenerator } from 'slate';
import React, { Component } from 'react';

import PropTypes from 'prop-types';

class TextEditor extends Component {
  static propTypes = {
    plateContent: PropTypes.string,
    saveContent: PropTypes.func,
    plateId: PropTypes.string
  };

  constructor(props) {
    super(props);
    resetKeyGenerator();
  }

  state = {
    state: Plain.deserialize(this.props.plateContent)
  };

  onChange = state => {
    this.setState({ state });
  };

  onDocumentChange = (document, state) => {
    const content = Plain.serialize(state);
    this.props.saveContent(this.props.plateId, content);
  };

  render = () => {
    return (
      <div
        style={{
          border: '1px solid grey',
          padding: 20,
          height: 500
        }}
      >
        <Editor
          state={this.state.state}
          onChange={this.onChange}
          onDocumentChange={this.onDocumentChange}
        />
      </div>
    );
  };
}

export default TextEditor;
