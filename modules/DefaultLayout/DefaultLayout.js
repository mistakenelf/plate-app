import React, { PropTypes } from "react";

import { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import { actions } from "../../store/modules/drawer";
import { bindActionCreators } from "redux";
import { compose } from "react-apollo";
import { connect } from "react-redux";

class DefaultLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    open: PropTypes.bool,
    openDrawer: PropTypes.func,
    closeDrawer: PropTypes.func
  };

  render() {
    const { children, open, openDrawer, closeDrawer } = this.props;
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
          open={open}
          openDrawer={openDrawer}
          closeDrawer={closeDrawer}
        />
        {children}
      </div>
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
  DefaultLayout
);
