// @flow

import { compose, graphql } from 'react-apollo';

import { Component } from 'react';
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';
import React from 'react';
import { actions } from '../store/modules/drawer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import gql from 'graphql-tag';

type Props = {
  children?: Element<any>,
  open?: boolean,
  openDrawer?: Function,
  closeDrawer?: Function
};

class DefaultLayoutContainer extends Component {
  props: Props;

  render() {
    const { children, open, openDrawer, closeDrawer } = this.props;
    return (
      <DefaultLayout
        open={open}
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
      >
        {children}
      </DefaultLayout>
    );
  }
}

const mapStateToProps = ({ drawer: { open } }) => {
  return {
    open
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      openDrawer: actions.openDrawer,
      closeDrawer: actions.closeDrawer
    },
    dispatch
  );
};

const MyQuery = gql`query {
  plate {
    name,
    description
  }
}`;

export default compose(
  graphql(MyQuery, {
    props: ({ data: { plate: { name, description } } }) => ({
      name,
      description
    })
  }),
  connect(mapStateToProps, mapDispatchToProps)
)(DefaultLayoutContainer);
