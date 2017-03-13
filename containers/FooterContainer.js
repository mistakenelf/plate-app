// @flow

import { Component } from "react";
import Footer from "../components/Footer/Footer";
import React from "react";
import { actions } from "../store/modules/footer";
import { bindActionCreators } from "redux";
import { compose } from "react-apollo";
import { connect } from "react-redux";

type Props = {
  open?: boolean,
  toggleLink?: Function
};

class FooterContainer extends Component {
  props: Props;

  render() {
    const { open, toggleLink } = this.props;
    return <Footer open={open} toggleLink={toggleLink} />;
  }
}

const mapStateToProps = ({ footer: { open } }) => {
  return {
    open
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleLink: actions.toggleLink
    },
    dispatch
  );
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  FooterContainer
);
