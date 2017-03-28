import React, { PropTypes } from "react";

import Navigation from "../../../components/Navigation/Navigation";
import { actions } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const DefaultLayoutContainer = props => {
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
        open={props.drawerOpen}
        openDrawer={props.openDrawer}
        closeDrawer={props.closeDrawer}
      />
      {props.children}
    </div>
  );
};

DefaultLayoutContainer.propTypes = {
  children: PropTypes.node,
  drawerOpen: PropTypes.bool,
  openDrawer: PropTypes.func,
  closeDrawer: PropTypes.func
};

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

export default connect(mapStateToProps, mapDispatchToProps)(
  DefaultLayoutContainer
);
