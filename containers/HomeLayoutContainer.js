import React, { PropTypes } from "react";

import { Component } from "react";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import { actions } from "../store/modules/drawer";
import { bindActionCreators } from "redux";
import { compose } from "react-apollo";
import { connect } from "react-redux";

class HomeLayoutContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
    open: PropTypes.bool,
    openDrawer: PropTypes.func,
    closeDrawer: PropTypes.func
  };

  render() {
    const { children, open, openDrawer, closeDrawer } = this.props;
    return (
      <HomeLayout open={open} openDrawer={openDrawer} closeDrawer={closeDrawer}>
        {children}
      </HomeLayout>
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

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  HomeLayoutContainer
);
