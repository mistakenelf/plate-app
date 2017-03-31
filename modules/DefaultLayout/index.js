import React, { PropTypes } from 'react';

import Navigation from '../Navigation';
import { actions } from '../../store/modules/navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const DefaultLayout = props => {
  return (
    <div>
      <Navigation
        open={props.open}
        openDrawer={props.openDrawer}
        closeDrawer={props.closeDrawer}
      />
      {props.children}
      <style jsx global>
        {
          `
            * {
              margin: 0;
              box-sizing: border-box;
            }
            body {
              font-family: Roboto, sans-serif;
              margin-top: 60px;
              margin-bottom: 0px;
            }
            `
        }
      </style>
    </div>
  );
};

const mapStateToProps = ({ navigation: { open } }) => {
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

DefaultLayout.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  openDrawer: PropTypes.func,
  closeDrawer: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
