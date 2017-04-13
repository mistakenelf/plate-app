import Header from '../components/PlateFiller/Header';
import PropTypes from 'prop-types';
import React from 'react';
import TextEditor from '../components/TextEditor/TextEditor';
import { graphql } from 'react-apollo';
import { savePlateContentMutation } from '../mutations/plateFillerMutations';

const PlateFillerContainer = ({ plateId, savePlateContent, content }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-sm-12 col-md-12 col-lg-12"
          style={{ width: '100%' }}
        >
          <Header plateId={plateId} />
          <TextEditor saveContent={savePlateContent} />
        </div>
      </div>
    </div>
  );
};

PlateFillerContainer.propTypes = {
  plateId: PropTypes.string,
  savePlateContent: PropTypes.func,
  content: PropTypes.string
};

export default graphql(savePlateContentMutation, {
  props: ({ mutate }) => ({
    savePlateContent: (id, content) => mutate({ variables: { id, content } })
  })
})(PlateFillerContainer);
