import React, { Component, PropTypes } from "react";

import Navigation from "../../components/Navigation/Navigation";

export default class DefaultLayout extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  state = {
    open: false
  };

  openDrawer = () => {
    this.setState({
      open: true
    });
  };

  closeDrawer = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <Navigation
          open={this.state.open}
          openDrawer={this.openDrawer}
          closeDrawer={this.closeDrawer}
        />
        {this.props.children}
      </div>
    );
  }
}
