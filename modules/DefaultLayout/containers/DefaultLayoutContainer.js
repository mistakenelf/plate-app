import React, { Component, PropTypes } from "react";

import Navigation from "../../../components/Navigation/Navigation";
import { actions } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class DefaultLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    drawerOpen: PropTypes.bool,
    openDrawer: PropTypes.func,
    closeDrawer: PropTypes.func
  };

  render() {
    const { children, drawerOpen, openDrawer, closeDrawer } = this.props;
    return (
      <div>
        <style jsx global>
          {
            `
              * {
                margin: 0;
                box-sizing: border-box;
              }
              body {
                font-family: 'Fira Sans', sans-serif;
                margin-top: 60px;
                margin-bottom: 0px;
              }
            `
          }
        </style>
        <Navigation
          open={drawerOpen}
          openDrawer={openDrawer}
          closeDrawer={closeDrawer}
        />
        {children}
      </div>
    );
  }
}

const mapStateToProps = ({ navigation: { drawerOpen } }) => {
  return {
    drawerOpen
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

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
