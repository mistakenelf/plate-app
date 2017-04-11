import { Editor, Raw, resetKeyGenerator } from 'slate';
import React, { Component } from 'react';

resetKeyGenerator();

const initialState = Raw.deserialize(
  {
    nodes: [
      {
        kind: 'block',
        type: 'paragraph',
        nodes: [
          {
            kind: 'text',
            text: 'A line of text in a paragraph.'
          }
        ]
      }
    ]
  },
  { terse: true }
);

class TextEditor extends Component {
  state = {
    state: initialState
  };

  onChange = state => {
    this.setState({ state });
  };

  render = () => {
    return (
      <div style={{ border: '1px solid grey', padding: 20, height: 500 }}>
        <Editor state={this.state.state} onChange={this.onChange} />
      </div>
    );
  };
}

export default TextEditor;
